// Import Webpack npm module
const webpack = require('webpack');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './index.jsx',
        vendor: [
            "axios",
            "bootstrap",
            "react",
            "react-dom",
            "react-redux",
            "redux",
            "redux-saga"
        ]
    },


    // Which file types are in our project, and where they are located
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // Where to output the final bundled code to
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
        sourceMapFilename: 'bundle.map.js'
    },
    devtool: '#source-map',
    module: {
        // How to process project files with loaders
        loaders: [
            // Process any .js or .jsx file with Babel
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|ico|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            {name: 'vendor', filename: 'vendor.bundle.js'}),

        new CopyWebpackPlugin([
            {from: 'index.html', to: 'index.html'},
            {from: './pics', to: './pics'}
        ])
    ]
}
