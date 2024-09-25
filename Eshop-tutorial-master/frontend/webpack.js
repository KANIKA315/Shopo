module.exports = {
    // other configurations
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: [
            /node_modules\/timeago\.js/, // Add the package to ignore
          ],
        },
      ],
    },
  };
  