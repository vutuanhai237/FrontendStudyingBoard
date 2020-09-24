const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
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
    }

}