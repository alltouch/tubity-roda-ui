const PATHS = require('./paths');
const webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                // Include accepts either a path or an array of paths.
                include: PATHS.app
            }
        ]
    },
    devtool: 'eval',
    devServer: {
        contentBase: PATHS.build,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        colors: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT || 3388
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
