module.exports = {
  siteMetadata: {
    title: 'WillAndElizabeth',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f09a7a',
        showSpinner: false,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
  ],
};
