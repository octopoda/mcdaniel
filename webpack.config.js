'use strict';


var path = require('path');
var webpack = require('webpack');


module.exports = {
	context: path.join(path.resolve(__dirname), '/resources/assets'),
	
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./app/register/index.jsx'
	],
	
	output: {
		path: __dirname + '/public/js',
    	filename: "bundle.js",
    	publicPath: 'http://localhost:3000/static/'
	},
	module: {
		loaders : [
			{
				test: /\.jsx?$/,
				loaders: ['react-hot', 'jsx?harmony'],
				include: __dirname + 'resources/assets'
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: '/node_modules',
				query : {
					presets: ['es2015', 'react']
				}
			},
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
}
