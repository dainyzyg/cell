let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let changeChunkIDs = require('./modules/webpackPlugin/changeChunkIDs.js')

module.exports = {
    entry: './vue/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[chunkhash].[name].js',
        chunkFilename: '[chunkhash].[name].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                    // publicPath: '../../js/dist/'
                }
            }
        ]
    },
    //   resolve: {
    //     alias: {
    //       'vue$': 'vue/dist/vue.common.js'
    //     }
    //   },
    //   devServer: {
    //     historyApiFallback: true,
    //     noInfo: true
    //   },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new changeChunkIDs(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        })
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // })
    ])
}