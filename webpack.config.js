const path = require('path');

const config = {
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
		],
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src')
		]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: '/node_modules',
				loader: 'babel-loader'
			}
		]
	}
};

module.exports = config;