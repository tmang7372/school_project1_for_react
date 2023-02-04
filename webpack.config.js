const { ProvidePlugin } = require('webpack'); // Remember to import

//webpack.config.js
module.exports = {
    entry: {
        App: './output/App.js',
    },

    plugins: [
        new ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom/client'
        }),
    ],

    output: {
      	// default output to ./dist folder
        filename: '[name].js', // Retain original file name
    },
    mode: 'development',
    watch: true,
};