import webpack from 'webpack'
import path from 'path'
const config = {
    entry:{
        index: './index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist');
        filename: 'index.js'
    }
}