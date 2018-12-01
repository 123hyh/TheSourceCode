var webpack = require('webpack')
module.exports = {
    entry: {
        index:'./index.js'
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name].js'
    }
}