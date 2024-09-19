const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        _main: './src/index.js',
        EventsAjax: './src/js/_events-ajax.js',
        Gallery: './src/js/_gallery.js',
        AddressData: './src/js/custom-gutenberg-blocks/address-data.js',
        PhoneNumber: './src/js/custom-gutenberg-blocks/phone-number.js',
        AddressEmail: './src/js/custom-gutenberg-blocks/address-email.js',
        FacebookUrl: './src/js/custom-gutenberg-blocks/facebook-url.js',
        AccountNumber: './src/js/custom-gutenberg-blocks/account-number.js',
        GoogleMaps: './src/js/custom-gutenberg-blocks/google-maps.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },            
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images/webp', to: 'images/webp' }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
        ],
    },
    watch: true
};
