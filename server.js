var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    colors: true,
    progress : true,
    proxy: {
    	'*' : 'http://mcdaniel.app'
    },
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) 
        console.log(err);

    console.log('Listening at localhost:3000');
});