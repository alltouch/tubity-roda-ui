const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const commonConfig = require('./webpack/common');
const startConfig = require('./webpack/start');
const buildConfig = require('./webpack/build');
const prodConfig = require('./webpack/prod');

let resultConfig = commonConfig;

if (TARGET === 'start' || !TARGET) {
    resultConfig = merge(resultConfig, startConfig);
}

if (TARGET === 'build' || TARGET === 'prod') {
    resultConfig = merge(resultConfig, buildConfig);
}

if (TARGET === 'prod') {
    resultConfig = merge(resultConfig, prodConfig);
}

module.exports = resultConfig;
