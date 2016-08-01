var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:{
        index:'./src/js/index.js'
    },
    output:{
        path:path.join(__dirname,'dist/js'),
        filename:'index.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'}
        ]
    }
}