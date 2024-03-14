---
sidebar_position: 2
---

# What attacks can Harpie prevent?

Below is a list of many (but not all) of the types of attacks that Harpie can prevent.

## Frontend Attacks

This attack is almost unavoidable. By hijacking a trusted website, attackers can trick users of the site into signing their money away. 

## Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

## Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
