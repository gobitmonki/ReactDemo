module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
        {
            test:/(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["env", "react","es2015","stage-2"]
                }
            },
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            },{
                loader: "css-loader"
            }]
        }
        ]
    }
}
