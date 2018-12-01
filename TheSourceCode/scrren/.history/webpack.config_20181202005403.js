module.exports = {
    mode: 'production',
    enrty: {
        index: './index.js'
    },
    output: {
        filename: '[name][hash].js',
        path: __dirname + '/dist'
    }
}