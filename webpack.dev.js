const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config');

const devConfig = {
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		port: 3001,
		proxy: {
			'/api/**': 'http://localhost:8080'
		}
	},
	devtool: 'source-map'
};

module.exports = webpackMerge(commonConfig, devConfig);