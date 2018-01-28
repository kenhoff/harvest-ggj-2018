const webpack = require("webpack");

module.exports = {
    entry: './src/entry.jsx',
    output: {
        filename: './build/app.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "react"]
                }
            }
        ]
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [new webpack.EnvironmentPlugin({"DELAY_MODIFIER": 1, "DEFAULT_DELAY": 1000, "NODE_ENV": "development"})]
}
