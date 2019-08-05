var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SimpleReactAccordion.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Soktest.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
              test: /\.scss$/,
              use: [
                  "style-loader", // creates style nodes from JS strings
                  "css-loader", // translates CSS into CommonJS
                  "sass-loader" // compiles Sass to CSS, using Node Sass by default
              ]
          }
        ]
    }
}