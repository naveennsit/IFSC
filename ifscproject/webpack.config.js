const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals");


const browserConfig = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/media/[name].[ext]",
                    publicPath: url => url.replace(/public/, "")
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: { importLoaders: 1 }
                        }
                    ]
                })
            },
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "public/css/[name].css"
        })
    ]
};

const serverConfig = {
    entry: "./server/index.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: "server.js",
        libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/media/[name].[ext]",
                    publicPath: url => url.replace(/public/, ""),
                    emit: false
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader/locals"
                    }
                ]
            },
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
            }
        ]
    }
};

module.exports = [browserConfig, serverConfig];