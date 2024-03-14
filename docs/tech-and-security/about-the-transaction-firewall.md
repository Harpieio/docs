---
sidebar_position: 2
---

# About the Transaction Firewall

Introduction
The Harpie RPC is an easy way to add two-factor-authentication to your transactions. Harpie RPC seamlessly plugs into your existing wallet, no downloads required.
When you sign a transaction that could be dangerous (i.e. asset-bearing transactions, suspicious contract address), Harpie sends you a notification over email to confirm the transaction. The transaction requires an explicit verification over email before it's sent out to the network.
What is a "dangerous transaction"?
Harpie categorizes dangerous transactions as those that can lose you money. These generally are approvals and transfers of tokens and ETH, but also include gasless OpenSea signature scams.
Dangerous transactions also include those where you try to interact with potentially bad wallets & smart contracts. These include, but are not limited to:
Bots
Phishing accounts
Honeypot contracts
Wallets linked to cybercrime
How it works

Harpie RPC sits between your wallet and the blockchain. It scans outbound transactions from your wallet, notifying you if you are transacting with thieves, scammers, or other bad actors. 
We utilize large data models, lists of known criminal addresses, and hand-picked data to ensure that malicious transactions are caught. We have over 1,000,000 malicious addresses and 40,000 benign addresses in our database, with more being added every day.
 If your transaction gets flagged, you receive a notification over email to confirm the transaction. Now, you'll have a chance to review your transaction and view any security warnings that we've identified with the account.

If you approve the transaction, your transaction will be forwarded to Infura nodes to be confirmed on the blockchain.
What are RPC modes?

After signing up with your email on Harpie RPC, you can access your dashboard at any time by revisiting the site and connecting with your wallet. There are 3 modes:

On NORMAL mode, you should only receive a notification when interacting with dangerous addresses. That means you can interact with dApps like Curve, OpenSea, and Uniswap normally without having to check your email. However, just like your bank, we'll send you an email as soon as we see something suspicious. That way you can double check your transaction and stop a rug.
Test Harpie RPC
First, make sure your wallet address is registered with Harpie
Next, switch to the Harpie RPC 
Now, try sending 0.000001 ETH to vitalik.eth. Vitalik's transaction history actually resembles that of a bot, so it gets flagged by our system
If everything is set up properly, you should get an email like this:

How to use Harpie RPC
Harpie is currently in Early Access as of writing this article. However, you can still sign up for Early Access by DM'ing the official Harpie Twitter with this info:
Your wallet address (that you'd like to get whitelisted for)
Why you're excited to use Harpie RPC
You will receive a response from the official Harpie account once you've been verified!