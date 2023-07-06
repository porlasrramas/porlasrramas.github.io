module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://porlasrramas.github.io/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "My Minimal Portfolio", // Used in manifest.json
          shortName: "Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '',
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
          allowAdFeatures: false
        },
        googleTagManager: {
          trackingId: '',
          cookieName: 'gatsby-gdpr-google-tagmanager',
          dataLayerName: 'dataLayer',
        },
        facebookPixel: {
          pixelId: '',
          cookieName: 'gatsby-gdpr-facebook-pixel',
        },
        tikTokPixel: {
          pixelId: '',
          cookieName: 'gatsby-gdpr-tiktok-pixel',
        },
        hotjar: {
          hjid: '',
          hjsv: '',
          cookieName: 'gatsby-gdpr-hotjar',
        },
        linkedin: {
          trackingId: '',
          cookieName: 'gatsby-gdpr-linked-in',
        },
        environments: ['production', 'development']
      },
    },
  ],
};
