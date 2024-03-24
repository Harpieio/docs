// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docSidebar: [
    "official-contract-addresses",
    "connecting-to-rpc",
    "where-data-is-sourced",
    {
      type: "category",
      label: "Harpie Background Check API",
      collapsed: false,
      items: ["background-check-api/code-examples-rename", "background-check-api/usage"],
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
