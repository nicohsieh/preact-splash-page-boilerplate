const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// rules
const getRules = () => {
	return [
		{
			test: /\.(sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader',
				'sass-loader',
			],
		},
		{
			loader: 'postcss-loader',
			test: /\.css$/,
		},
	]
}
// plugins
const getPlugins = () => {
	return [
		new CleanWebpackPlugin(['./dist']),
		new MiniCssExtractPlugin({
			filename: '[name]-[hash].css',
		}),
	]
}

module.exports = {
	getRules: getRules,
	getPlugins: getPlugins,
}
