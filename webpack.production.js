const path = require( 'path' ),
	fs = require( 'fs' ),
	appDirectory = fs.realpathSync( process.cwd() ),
	nodeExternals = require( 'webpack-node-externals' ),
	resolveAppPath = ( relativePath ) =>
		path.resolve( appDirectory, relativePath );

// Required for babel-preset-react-app
process.env.NODE_ENV = 'production';

module.exports = {
	mode: 'production',
	entry: resolveAppPath( 'src/index.js' ),
	output: {
		path: resolveAppPath( 'dist' ),
		filename: 'index.js',
		library: {
			name: 'anywhere-editor',
			type: 'umd',
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				include: [ resolveAppPath( 'src' ) ],
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
	externals: [ nodeExternals() ],
};
