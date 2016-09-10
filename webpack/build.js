const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('app.css');

module.exports = {
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: extractCSS.extract(["css"])
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract(["css", "sass"])
            }
        ]
    },
    plugins: [
        extractCSS
    ]
};
