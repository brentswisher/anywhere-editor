const path = require( 'path' ),
	fs = require( 'fs' ),
	HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
	appDirectory = fs.realpathSync( process.cwd() ),
	resolveAppPath = ( relativePath ) =>
		path.resolve( appDirectory, relativePath ),
	host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
	mode: 'development',
	entry: resolveAppPath( 'demo/src/index.js' ),
	output: {
		path: resolveAppPath( 'demo/dist' ),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: [
					resolveAppPath( 'demo/src' ),
					resolveAppPath( 'src' ),
				],
				loader: 'babel-loader',
				options: {
					presets: [
						// Preset includes JSX, TypeScript, and some ESnext features
						require.resolve( 'babel-preset-react-app' ),
					],
				},
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
			},
		],
	},

	devServer: {
		// Enable hot reloading
		hot: true,
		host,
		port: 3000,
	},
	plugins: [
		// Re-generate index.html with injected script tag.
		// The injected script tag contains a src value of the
		// filename output defined above.
		new HtmlWebpackPlugin( {
			template: path.join( __dirname, 'demo/public/index.html' ),
			filename: './index.html',
		} ),
	],
};
