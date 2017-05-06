import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const env = process.env.NODE_ENV || 'development';
const prod = env === 'production';

const src = path.resolve(__dirname, './src/app');
const dist = path.resolve(__dirname, './dist/app');

export default {
    context: src,
    devtool: prod ? 'source-map' : 'cheap-module-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    target: 'web',
    entry: {
        vendor: ['babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux'],
        app: './index.js'
    },
    output: {
        path: dist,
        filename: '[name].js',
        publicPath: prod ? '' : '/'
    },
    devServer: {
        contentBase: src
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: ['babel-loader'],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: !prod
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[sha512:hash:base32:10]-[name]-[local]',
                            modules: true,
                            sourceMap: !prod
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: !prod
                        }
                    }
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
        })
    ]
};