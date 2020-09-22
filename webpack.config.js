const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // this plugin to generate an html with a template for running 

//phan nay luon co dung luong va noi dung khong thay doi nen co the cache o trinh duyet va trinh duyet khong phai tai lai lan nua => vendor caching.
const VENDOR_LIBS = [
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-solid-svg-icons",
    "@fortawesome/react-fontawesome",
    "@material-ui/core",
    "@tinymce/tinymce-react",
    "bulma",
    "bulma-helpers",
    "js-cookie",
    "material-design-icons",
    "pdf-viewer-reactjs",
    "react",
    "react-bootstrap",
    "react-dom",
    "react-images-upload",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-thunk"
]

//phan nay se luon thay doi nen trinh duyet se can tai lai nen khong can phai cache
module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS //for vendor caching, after loading in the first time, the browser will save all library to cache.
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js' //due to 2 entries, we can't set only one output name => change to [name], [chunkhash] for encode output file
    },
    mode: 'development',
    module: {
        rules: [{
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                },

            }],
            test: /\.js$/,
            exclude: '/node_modules/',//do node_modules khá nặng nên không để cho tìm kiếm trong node_modules
        },
        {
            use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.(sa|sc|c)ss$/
        },
        {
            use: ['file-loader'],
            test: /\.(png|svg|jpg|gif)$/,
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        },
        ]
    },
    plugins:
        [
            new HtmlWebpackPlugin({ template: './src/index.html' }) // teach for webpack a template to generate a html file in dist
        ]
    ,

    // for code spliting, these is default config of splitChunks, for more information: https://webpack.js.org/plugins/split-chunks-plugin/
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            // minRemainingSize: 0, tai lieu tao lao
            maxSize: 0,
            minChunks: 1,
            // maxAsyncRequests: 30,
            // maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendor: { // code from github, not default configuration 
                    test: /node_modules/,
                    name: 'vendor', //split a file named vendor from the dependence of bundle.js => bundle.js will be lighter
                    chunks: 'all',
                    enforce: true
                },
                manifest: {
                    test: /node_modules/,
                    name: 'manifest', //this will be generate a file named manifest (dung de xac dinh file nao co su thay doi moi build lai)
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }

}