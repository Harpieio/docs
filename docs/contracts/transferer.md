# Transferer

The `Transferer` contract has the ability to move your tokens to our noncustodial Vault. It cannot transfer your tokens anywhere else.

Below is a function-by-function explanation of the code.

## Roles

```solidity
address immutable private vaultAddress; // set during construction
address immutable private transferEOASetter; // set during construction
mapping(address => bool) private _transferEOAs;
```
There are three roles (one dynamic, two immutable and set during construction) in this contract:
* `vaultAddress` is the address of the associated Noncustodial Vault

* `transferEOAs` are addresses that can call our [Transfer Functions](#permission-functions). These addresses are controlled by our automated detection algorithm

* `transferEOASetter` is an address owned by Harpie that can set `_transferEOAs`

## Transfer Functions
```solidity
function transferERC721(
    address _ownerAddress, 
    address _erc721Address, 
    uint256 _erc721Id, 
    uint128 _fee
) public returns (bool)

function transferERC20(
    address _ownerAddress, 
    address _erc20Address, 
    uint128 _fee
) public returns (bool)

function batchTransferERC721(ERC721Details[] memory _details) public returns (bool)

function batchTransferERC20(ERC20Details[] memory _details) public returns (bool)
```

These functions transfer user assets into the `Vault` when we detect a malicious transaction. They're hardcoded to transfer tokens to the `vaultAddress` role, and cannot submit user tokens anywhere else. They are only callable by the `transferEOA` role.

*    The `transfer` functions transfer a single user's assets (ERC20/ERC721) to the Vault.

*    The `batchTransfer` functions are able to transfer multiple users' assets. We use these in case of large-scale attacks.

## Permission Functions
```solidity
function addTransferEOA(address _newTransferEOA) public

function removeTransferEOA(address _eoaToBeRemoved) public

function removeAbilityToSetNewTransferEOAs() public
```
These functions are only callable by the role `transferEOASetter`.

*    `addTransferEOA` and `removeTransferEOA` add and remove `transferEOAs`, the wallets that are able to call the Transfer Functions

*    `removeAbilityToSetNewTransferEOAs` is a permanent operation that prevents the addition of any new `transferEOAs`. After calling this flag, Harpie is no longer able to add new wallets to the `transferEOA` role, but will still able to remove them.