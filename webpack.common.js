const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: {
        "index": "./src/index.js",
        "search": "./src/search.js",
        "contact-us": "./src/contact-us.js",
    },
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets"
                        }
                    },
                ]
            }
        ]
    },
}