module.exports = {
    mode: 'production',
    enrty: {
        index: './index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}