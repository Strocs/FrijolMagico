const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CsssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        home: './src/index.js',
        ilus: './src/ilustradorxs.js',
        taller: './src/talleres.js',
        about: './src/nosotrxs.js',
        // stream: './src/live.js',
        iluspage: './src/iluspage.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/images/[hash][ext][query]'
    },

    resolve: { 
        extensions: ['.js'],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@templates': path.resolve(__dirname, 'src/components/templates/'),
        }
    },

    module: {
        
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 
            'css-loader',
            ]
        },
        {
            test: /\.(png|jpg|gif|svg|ico)$/,
            type: 'asset/resource',
        },
        {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
              sources: {
                list: [
                  {
                    attribute: 'src',
                    type: 'src',
                    filter: (tag) => {
                      return tag.toLowerCase() === 'img';
                    },
                  },
                ],
              },
            },
        },
        {
            test: /\.(woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: "application/font-woff",
                    name: "[name].[contenthash].[ext]",
                    outputPath: "./assets/fonts/",
                    publicPath: "assets/fonts/",
                    esModule: false,
                }
            }
        }
    ]},

    plugins: [

        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html', 
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/ilustradorxs.html',
            filename: './ilustradorxs.html',
            chunks: ['ilus'],
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/talleres.html',
            filename: './talleres.html',
            chunks: ['taller'],
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/nosotrxs.html',
            filename: './nosotrxs.html',
            chunks: ['about'],
        }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/live.html',
        //     filename: './live.html',
        //     chunks: ['stream'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/blue-straycatt.html',
        //     filename: './ilustradorxs/blue-straycatt.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/camellia-liz.html',
        //     filename: './ilustradorxs/camellia-liz.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/cris-crowfin.html',
        //     filename: './ilustradorxs/cris-crowfin.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/evincentv.html',
        //     filename: './ilustradorxs/evincentv.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/eline1three.html',
        //     filename: './ilustradorxs/eline1three.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/ojus-pocus.html',
        //     filename: './ilustradorxs/ojus-pocus.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/sofiniscus.html',
        //     filename: './ilustradorxs/sofiniscus.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/sunmorales.html',
        //     filename: './ilustradorxs/sunmorales.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/tigre-maltes.html',
        //     filename: './ilustradorxs/tigre-maltes.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/astro-glitter.html',
        //     filename: './ilustradorxs/astro-glitter.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/camipepe.html',
        //     filename: './ilustradorxs/camipepe.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/catana.html',
        //     filename: './ilustradorxs/catana.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/collarcitos.html',
        //     filename: './ilustradorxs/collarcitos.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/drommer.html',
        //     filename: './ilustradorxs/drommer.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/elmenese.html',
        //     filename: './ilustradorxs/elmenese.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/neehre.html',
        //     filename: './ilustradorxs/neehre.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/niño-pan.html',
        //     filename: './ilustradorxs/niño-pan.html',
        //     chunks: ['iluspage'],
        // }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: './public/ilustradorxs/prrr-miaow.html',
        //     filename: './ilustradorxs/prrr-miaow.html',
        //     chunks: ['iluspage'],
        // }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        new CopyPlugin({
            patterns: [
            {
                from: path.resolve(__dirname, "src", "utils"),
                to: "utils"
            }
            ]
        }),

        new CopyPlugin({
            patterns: [
            {
                from: path.resolve(__dirname, "src", "assets", "images", "gallery"),
                to: "assets/gallery"
            }
            ]
        }),

        new Dotenv(),
        new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin({
            logo: 'src/assets/images/LogoFrijol.png',
            mode: 'light',
            cache: true,
            outputPath: './assets/images',
            prefix: 'assets/images/',
            inject: true,
          }),
    ],
    
    optimization: {
        minimize: true,
        minimizer: [
            new CsssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }

}
