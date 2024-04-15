// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs",
  tagline:
    "Learn how to outsmart hackers and scammers by blocking their transactions before they drain your wallet. Never be a victim again.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.harpie.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Harpieio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    "@docusaurus/theme-live-codeblock",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          // add this after its deployed
          // feedOptions: {
          //   type: 'all',
          //   copyright: `Copyright © ${new Date().getFullYear()} Harpie Blockchain Solutions, Inc. Built with Docusaurus.`,
          //   createFeedItems: async (params) => {
          //     const {blogPosts, defaultCreateFeedItems, ...rest} = params;
          //     return defaultCreateFeedItems({
          //       // keep only the 10 most recent blog posts in the feed
          //       blogPosts: blogPosts.filter((item, index) => index < 10),
          //       ...rest,
          //     });
          //   },
          // },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "docs",
        logo: {
          alt: "Harpie Logo",
          src: "/img/Harpie-Aeonik-Logo.svg",
          href: "/",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docSidebar",
            position: "left",
            label: "For developers",
          },
          {
            to: "https://intercom.help/harpie/en/collections/8890603-getting-started",
            label: "For individuals",
            position: "left",
          },
          {
            to: "https://intercom.help/harpie/en/collections/8890597-harpie-for-enterprise",
            label: "For enterprise",
            position: "left",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        logo: {
          alt: "Harpie Logo",
          src: "/img/Harpie-Aeonik-Logo.svg",
          href: "/",
        },
        links: [
          {
            title: "Footer",
            items: [
              {
                label: "HARPIE",
                href: "https://harpie.io",
              },
              {
                label: "COMMUNITY",
                href: "https://discord.gg/WfBtxZfp85",
              },
              {
                label: "ENTERPRISE",
                href: "https://harpie.io/rpc/enterprise",
              },
            ],
          },
          {
            title: "SubFooter",
            items: [
              {
                label: "Privacy",
                href: "https://harpie.io/privacy",
              },
              {
                label: "Terms of Use",
                href: "https://harpie.io/terms",
              },
              {
                label: "Press & Media",
                href: "https://harpie.notion.site/Harpie-in-the-News-fe64afea0c3c4b1b8f2a76723cc6d491",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Harpie Blockchain Solutions, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.duotoneDark,
        additionalLanguages: ["java"],
      },
      algolia: {
        contextualSearch: false,
        // The application ID provided by Algolia
        appId: '2HGHXI5ATT',
        // Public API key: it is safe to commit it
        apiKey: '12f80f7ed58540814810034a77d3450a',
        indexName: 'harpieioio',
        translations: {
          placeholder: "Search for a topic"
        }
      },
    }),
};

export default config;
