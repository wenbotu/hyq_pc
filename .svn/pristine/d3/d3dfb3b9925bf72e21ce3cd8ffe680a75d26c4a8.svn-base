var path = require('path')
var webpack = require('webpack')
//var rootName = '/hotyq'
var rootName = 'http://localhost:8000/hotyq'

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  //devtool: 'inline-eval-cheap-source-map',
  //devtool:'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'                   
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: rootName+'/dist/',
    // 添加 chunkFilename
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    /*new webpack.ProvidePlugin({
		    $: "jquery"
		}),*/
		/*new webpack.optimize.UglifyJsPlugin({
         compress: {
            warnings: false
         }
    })*/
  ],
  module: {
	    loaders: [{
	        test: /\.coffee$/,
	        loader: 'coffee-loader'
	    }, {
	        test: /\.css$/,
	        loader: "style!css"
	    }, {
	        test: /\.scss$/,
	        loader: "style!css?modules&importLoaders=2&camelCase&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 25 versions!sass"
	        //loader: "style!css?modules&importLoaders=2&camelCase&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap"
	    }, {
	        test: /\.jsx?$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: 'babel', // 'babel-loader' is also a legal name to reference
	        query: {
	            presets: ['es2015','react']
	        }
	    },
	    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
	    {
	    	test: /\.(jpg|png)$/, 
	    	//loader: "url?limit=5000000"
	    	loader: 'url?limit=8192&name=build/[name].[ext]'
	    }]
	},
	resolve:{
		extensions:['','.js','.css','.scss'],
		/*alias:{
			'jquery':path.resolve(__dirname,'../src/plugins/jquery.min.js')
		}*/
		
	}
}

/*{
  "plugins": [["import", { libraryName: "antd", style: "css" }]]
}*/