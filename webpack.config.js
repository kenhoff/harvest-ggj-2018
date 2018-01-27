module.exports = {
    entry: './src/start.jsx',
    output: {
        filename: './build/app.js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: {
                presets: ["env", "react"]
            }
        }]
    },
    devtool: "cheap-module-eval-source-map"
}
