const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = new htmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

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
			},
			{
				test: /\.css$/,
				exclude: '/node_modules',
				loaders: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		htmlWebpackPluginConfig
	]
};

module.exports = config;