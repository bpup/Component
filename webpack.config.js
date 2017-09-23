const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const NyanProgressPlugin=require('nyan-progress-webpack-plugin')
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            path.join(__dirname, 'src/main.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
		}),
		new CleanWebpackPlugin(['dist']),
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			 }
		 }),
		 new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
		new ExtractTextPlugin({
			filename: '[name].[contenthash:5].css',
			allChunks: true
		}),
		new webpack.HashedModuleIdsPlugin(),
		new NyanProgressPlugin({
			// 获取进度的时间间隔，默认 180 ms
			debounceInterval: 60,
			nyanCatSays (progress, messages) {
			  if (progress === 1) {
				// 当构建完成时，喊出「呦，又在写 Bug 了？」
				return '呦, 又在发车了?'
			  }
			}
		  })
	],
	resolve: {
        alias: {
            NICE: path.join(__dirname, 'src/component/nice.js'),
            HELLO: path.join(__dirname, 'src/component/twoside.js'),
			ROUTER: path.join(__dirname, 'src/router/index.js'),
			REDUCER: path.join(__dirname, 'src/redux/reducers/index.js'),
			ACTION: path.join(__dirname, 'src/redux/action/index.js'),
			STORE: path.join(__dirname, 'src/redux/store/index.js'),
        }
    }
};