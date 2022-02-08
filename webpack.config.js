const path = require( 'path' );
const fs = require( 'fs' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

// App directory
const appDirectory = fs.realpathSync( process.cwd() );

// Gets absolute path of file within app directory
const resolveAppPath = ( relativePath ) =>
	path.resolve( appDirectory, relativePath );

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
	// Entry point of app
	entry: resolveAppPath( 'demo/src/index.js' ),
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
