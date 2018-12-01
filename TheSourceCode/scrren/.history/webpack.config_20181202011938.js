var webpack = require('webpack')
var path = require('path')
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
        port: 9000,
        contentBase: path.resolve(__dirname,'dist')
    }
}