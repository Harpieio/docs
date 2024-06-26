# Noncustodial Vault

The `Vault` contract receives tokens from `Transferer` and allows users to withdraw those tokens at a later time. To withdraw those tokens, users will need to pay a fee in ETH.

Below is a function-by-function explanation of the code.

## Roles

**User Roles**

```solidity
mapping(address => address) private _recipientAddress;
```

Each user on Harpie will have a registered `recipientAddress` that is able to withdraw their tokens transferred in by `Transferer`.

**Contract-wide Roles**

```solidity
address private immutable transferer; // set during construction
address payable private feeController;
address private immutable serverSigner; // set during construction
address private immutable emergencyFeeRemover; // set during construction
```

There are four contract-wide roles (one dynamic, three immutable and set during construction) in this contract:

- `transferer` is the address of the associated [Transferer](./transferer.md)
- `feeController` is an address controlled by Harpie that's able to withdraw payments users have deposited and reduce individual users' fees

- `serverSigner` is an address that we use to validate requests by users to change their `recipientAddress`
- `emergencyFeeRemover` is an address of a multi-signature wallet that activates our [Emergency Functions](#emergency-functions), and this multi-sig has majority control by custodians outside the Harpie team

## Withdrawal Functions

```solidity
function withdrawERC721(
    address _originalAddress,
    address _erc721Address,
    uint256 _id
) payable external

function withdrawERC20(
    address _originalAddress,
    address _erc20Address
) payable external
```

These functions are only callable by a users' `recipientAddress`, and allow the `recipientAddress` to withdraw their tokens.

- Caller must pay a fee in ETH to withdraw, currently set to 0

## Recipient Address Functions

```solidity
function setupRecipientAddress(address _recipient) external

function changeRecipientAddress(
    bytes memory _signature,
    address _newRecipientAddress,
    uint256 expiry
) external
```

- `setupRecipientAddress` can only be called once by a user to set up their initial `recipientAddress`

- `changeRecipientAddress` can be called by a user to change their `recipientAddress`

  - This requires a signature from our `serverSigner` for additional verification

## Log Functions

```solidity
function logIncomingERC20(
    address _originalAddress,
    address _erc20Address,
    uint256 _amount,
    uint128 _fee
) external

function logIncomingERC721(
    address _originalAddress,
    address _erc721Address,
    uint256 _id,
    uint128 _fee
) external
```

These functions store the value and fee for each user's stored tokens.

- These functions are only callable from the `Transferer` contract, which run from functions only callable by `transferEOAs`

## FeeController Functions

```solidity
function reduceERC20Fee(
    address _originalAddress,
    address _erc20Address,
    uint128 _reduceBy
) external returns (uint128)

function reduceERC721Fee(
    address _originalAddress,
    address _erc721Address,
    uint256 _id,
    uint128 _reduceBy
) external returns (uint128)

function withdrawPayments(uint256 _amount) external

function changeFeeControllerRequest(address payable _newFeeController) external

function changeFeeController() external
```

These functions are only callable by the role feeController.

- The `feeController` can only reduce fees, never increase them

- They can withdraw any fees stored in the contract, but never withdraw any tokens

- `changeFeeController` has a timelock period of 14 days, which is begun by calling `changeFeeControllerRequest`

## Emergency Functions
```solidity
function toggleEmergencyFlag(bool _newSetting) external

function withdrawERC721WithoutFees(
    address _originalAddress, 
    address _erc721Address, 
    uint256 _id
) external

function withdrawERC20WithoutFees(
    address _originalAddress, 
    address _erc20Address
) external
```
These emergency functions allow users to freely withdraw their crypto irrespective of any fees. These are put in place to avoid the possibility of maliciously-set withdrawal fees created by an outside attacker.

*    `toggleEmergencyFlag` is only callable by `emergencyFeeRemover`

*    Once the flag is turned on, any user can withdraw their allocated balance without fees