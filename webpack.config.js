import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';

dotenv.config();
const MODE = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const __dirname = path.resolve(path.dirname(''));

const config = {
	entry: './src/index.js',
	mode: MODE,
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		port: 3020,
		historyApiFallback: true
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/html', to: '.' }
			]
		})
	]
}

export default config;