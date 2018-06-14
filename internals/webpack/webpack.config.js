'use strict'

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './entry/app.js',
    output: {
        path: path.resolve(__dirname, '../../www'),
        chunkFilename: '[name].bundle-[chunkhash:4].js',
        filename: 'build-[chunkhash:4].js'
    },
    
    devtool: 'source-map',

    devServer: {
        port: 9000
    },

    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'img/[name]-[hash:4].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name]-[hash:4].[ext]'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(
            '../../www',
            {
                allowExternal: true,
                root: __dirname,
                verbose: true,
                dry: false
            },
        ),
        new HtmlWebpackPlugin({
            template: './entry/index.html'

        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            // React: 'react',
            // ReactDOM: 'react-dom'
        })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
    
};