var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path .resolve(__dirname, 'src/');
var DIST_DIR = path .resolve(__dirname, 'dist/');

var config = {
    entry: SRC_DIR + "/React_app.js",
    output: {
        path: DIST_DIR ,
        filename: "bundle.js",
        publicPath: "/" 
    },
    module: {
        rules: [
            { // js loader
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["es2015", "react", "stage-2"]
                  }
                }
            },{ // jsx loader
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["es2015", "react", "stage-2"]
                  }
                }
            },{ // css loader
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{ // sass loader
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },{ // loader for font and icons {Bootstrap folder}
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: {
                    loader: 'url-loader'
                }
            }
        ],
    },
    plugins: [
        // inherit the jquery in the application
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })
      ]
};

module.exports = config;