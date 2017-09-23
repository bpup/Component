const path = require('path');
const NyanProgressPlugin=require('nyan-progress-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 
    /*入口*/
	entry: [
        'react-hot-loader/patch',
		path.join(__dirname, 'src/main.js'),
	
    ],
	vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux'],
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
		path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
	},
	devServer: {
        contentBase: path.join(__dirname, './dist')
	},
	devtool: 'inline-source-map',
	resolve: {
        alias: {
            NICE: path.join(__dirname, 'src/component/nice.js'),
            HELLO: path.join(__dirname, 'src/component/twoside.js'),
			ROUTER: path.join(__dirname, 'src/router/index.js'),
			REDUCER: path.join(__dirname, 'src/redux/reducers/index.js'),
			ACTION: path.join(__dirname, 'src/redux/action/index.js'),
			STORE: path.join(__dirname, 'src/redux/store/index.js'),
        }
    },
	/*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader?cacheDirectory=true'],
			include: path.join(__dirname, 'src')
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		 },
		 {
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192   //小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求。
				}
			}]
		}
	
	]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src/index.html')}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor'
			}),	  
		new NyanProgressPlugin({
		  // 获取进度的时间间隔，默认 180 ms
		  debounceInterval: 60,
		  nyanCatSays (progress, messages) {
			if (progress === 1) {
			  // 当构建完成时，喊出「呦，又在写 Bug 了？」
			  return '呦, 又在写 Bug 了?'
			}
		  }
		})
	  ]
};