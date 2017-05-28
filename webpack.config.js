var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
      // '.ts' and '.tsx' as resolvable extensions.
      extensions: ['', '.js', '.ts', '.tsx']
  },

  entry: [
    './index.tsx'
  ],

  output: {
    path: path.join(basePath, "dist"),
    filename: 'bundle.js'
  },

  //https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
  devServer: {
    contentBase: './dist', //Content base
    inline: true, //Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    directoryListing: true,
    open: true
  },

  // Enable sourcemaps for debugging webpack's output.
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  module: {
		loaders: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
		]
	},
  plugins:[
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html' //Name of template in ./src
    })
  ]
}
