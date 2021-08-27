const path = require("path")
const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "axios": "axios"
        }),
        new HtmlWebpackPlugin({
            chunks: ["index"],
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            chunks: ["search"],
            filename: "search.html",
            template: "./src/search.html",
        }),
        new HtmlWebpackPlugin({
            chunks: ["contact-us"],
            filename: "contact-us.html",
            template: "./src/contact-us.html",
        }),
    ],
})