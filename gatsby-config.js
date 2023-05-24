module.exports = {
  siteMetadata: {
    title: `Gatsby with styled components`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        disableVendorPrefixes: true,
        minify: true,
        transpileTemplateLiterals: false,
        ssr: true,
        pure: true,
        meaninglessFileNames: ["index", "styles"],
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93349937-2`,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-offline`,
  ],
};
