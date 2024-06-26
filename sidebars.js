// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docSidebar: [
    "whitepaper",
    "where-data-is-sourced",
    {
      type: "category",
      label: "Contracts",
      collapsed: false,
      items: ["contracts/official-contract-addresses", "contracts/transferer", "contracts/noncustodial-vault", "contracts/audit"],
    },
    {
      type: "category",
      label: "Harpie for Enterprise",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Background Check API",
          collapsed: true,
          items: [
            "background-check-api/introduction",
            {
              type: "category",
              label: "Methods",
              collapsed: false,
              items: [
                "background-check-api/methods/validate-address",
                "background-check-api/methods/validate-transaction",
                "background-check-api/methods/get-contract-name"
              ]
            }
          ]
        },
       
       "background-check-api/usage"],
    },
    {
      type: "category",
      label: "Transaction Scanning",
      collapsed: false,
      items: ["transaction-scanning/code-examples-rename", "transaction-scanning/usage"],
    },
    "newsfeed-api-example",
    "verify-addresses-api-example",
  ],
};

export default sidebars;
