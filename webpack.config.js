var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer:{
        contentBase:'./dist/view'
    },
    entry:{
        index:'./src/js/index.js',
        list:'./src/js/list.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        publicPath: "dist/",
        filename:'js/[name].js'
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
        new HtmlWebpackPlugin({
            filename:'./view/index.html',
            template:'./src/view/index.html',
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:false,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            },
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:'./view/list.html',
            template:'./src/view/list.html',
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:false,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            },
            chunks:['list']
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compass:{
        //         warnings:false
        //     },
        //     except: ['$super', '$', 'exports', 'require'] 
        // })
    ]
}