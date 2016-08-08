var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer:{
        contentBase:'./dist/view'
    },
    entry:[
        './src/js/index.js'
    ],
    output:{
        path:path.join(__dirname,'dist/js'),
        filename:'index.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.js$/,exclude:'/node_modules/',loader:'babel-loader'}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            _:"lodash",
            $:"jQuery"
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compass:{
        //         warnings:false
        //     }
        // })
    ]
}