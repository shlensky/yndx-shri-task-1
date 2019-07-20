const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode,
    entry: {
        script: './src/script.js',
        'template-engine': './src/template-engine.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    devServer: {
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
};
