var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	// context: __dirname + '/resources/assets/',

	entry: [
		'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
		'./resources/assets/sass/dashboard.scss'
	],
	module: {
		loaders : [
			{ 
				test: /\.jsx?$/, 
				loaders: ['react-hot', 'jsx?harmony'], 
				include: __dirname + '/resources/assets'
			}, { 
        		test: /\.jsx$/, 
        		exclude: /node_modules/, 
        		loaders: ['jsx-loader?insertPragma=React.DOM&harmony']
        	}, { 
        		test: /\.jsx$/, 
        		exclude: /node_modules/, 
        		loader: 'babel-loader'
        	}, {
				test: /\.scss?$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
		]
	},
	output: {
		path: path.join(__dirname, './public'),
    	filename: 'js/[name].js',
    	publicPath: 'http://localhost:3000/static/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
		modulesDirectories: ['src', 'node_modules']
	},
	devServer: {
		contentBase: '../public',
		hot: true,
		proxy:   { 
			'*' : 'http://mcdaniel.app' 
		} 
	},
	plugins: [
		new ExtractTextPlugin('css/app.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
	]
}
