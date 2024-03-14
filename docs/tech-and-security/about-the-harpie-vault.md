---
sidebar_position: 3
---

# About the Harpie Vault

Harpie identifies malicious transactions by having users set up a "trusted network" of protocols and peers. If your wallet sends a transfer to someone outside this trusted network, we stop that transaction from happening.
We are able to eliminate these malicious transfers even after they're transmitted on-chain with an advanced strategy called frontrunning. When a malicious transfer or approval is detected, we move your funds to a noncustodial vault before the transaction can confirm. By paying a higher gas fee, we have the ability to move your funds to the vault before the hacker can move your funds to their own wallet.
Learn more about the "trusted network" concept: 

Security: summary
Harpie has rigorous security measures in place to ensure the safety of your assets. Our smart contracts have public code and public audits in place, so anyone can verify as well.
Harpie works by transferring your assets out of your wallet and into a noncustodial vault before an attacker's transaction can execute. Because of this, we've made sure that our transfer mechanism is airtight.
Transferer Contract
When you sign up for Harpie, you'll give the  contract permission to transfer your tokens to our noncustodial vault. It cannot transfer your tokens anywhere else.
When we detect an attack on your wallet, we use this Transferer contract to move your assets away from your compromised wallet. This smart contract can only move your assets to one location: our noncustodial Vault contract.
Vault Contract
The  contract is where you can withdraw your assets that have been transferred by our frontrunner. Only you can withdraw your assets from the Vault; there is no admin key that allows us to withdraw your assets on your behalf.
Conclusion
Because the Transferer contract can only move assets to the Vault, and since there is no ability for an admin to withdraw users' assets from the Vault, we feel that our system can responsibly handle the trust that comes with giving a contract access to transfer tokens.
You can learn more about our contracts and the security programmed within them in .
Frequently asked questions
Can I mint new NFTs even with a Harpie plan?
Yes, you can. We only stop transactions when your protected tokens are at risk (i.e. approvals and transfers) Since the minting of an NFT is not a risky operation, we allow them to run through our filter.
What if I want to use a new protocol or project? Will I have to manually add it to my trusted network?
We offer a curated list of the most popular & secure protocols, so you likely won't need to add any additional protocols. If you're using an all-new protocol, you're able to add them to your trusted network as a custom address. That being said, we recommend a strong amount of caution when adding custom addresses to your trusted network.
How does Harpie deal with mempool-obfuscating technology, like private mempools, Flashbots, etc.?
Mempool-obfuscating technologies do not substantially affect our operations. 
An overwhelming majority of consumer-targeted attacks ask victims to sign the transaction that sends their assets over to an attacker. Since these transactions are self-signed, and our users are unlikely to use mempool obfuscators for their daily transactions, we find that mempool obfuscation is not a large concern for our usecase.

Read more [Link](../about/whitepaper)