const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const prod = env === 'production';

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
    context: src,
    entry: {
        vendor: ['babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux'],
        app: './js/index.js'
    },
    output: {
        path: dist,
        filename: '[name].bundle.js',
        publicPath: prod ? '' : '/'
    },
    devServer: {
        contentBase: src
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: ['babel-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(src, 'index.html'),
            path: dist,
            filename: 'index.html',
        }),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(env),
            },
            'PRODUCTION': JSON.stringify(prod),
        }),
    ]
};
