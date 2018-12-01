var webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
        index:'./index.js'
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name].js'
    },
    devServer: {
        host: '127.0.0.1',
        port: 9000
    }
}