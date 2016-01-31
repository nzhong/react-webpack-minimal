module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel",
              query: { presets:['react'] }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        proxy: {
            '/login*': {
                target: 'http://localhost:9090/',
                secure: false,
            }
        }
    }
};
