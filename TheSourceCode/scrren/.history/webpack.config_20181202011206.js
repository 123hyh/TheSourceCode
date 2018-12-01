var webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
        index:'./index.js'
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name].js'
    }
}