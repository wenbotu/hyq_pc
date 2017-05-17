var path = require('path')
var webpack = require('webpack')
var rootName = '/hotyq'
//var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  devtool: false,
	/*entry: [
	    //'webpack-hot-middleware/client',//webpack 打包的时候把它注释掉
	    '../src/index'                   //webpack 打包的时候改成 ../src/index 
		
	],*/
  entry: {
	    bundle: './src/index',
	    /*babel_polyfill:['babel-polyfill'],
	    react_router_redux:['react-router-redux']*/
	    //hotyq:['../src/routes/Hotyq/components/Hotyq'],
	    //vendor: ['react']
	    //vendor: ['react', 'react-dom', 'react-router'],
	    react:['react'],
	    react_dom:['react-dom'],
	    react_router:['react-router'],
	    react_router_redux:['react-router-redux'],
	    babel_polyfill:['babel-polyfill'],
	    react_redux:['react-redux']
	    //hotyq:['../src/routes/Hotyq/index']
	},
  //vendor:['react', 'react-dom', 'react-router' ,'classnames'],
  //vendor: ['react', 'react-dom', 'react-router'],
  output: {
    path: path.join(__dirname, '../dist'),
    //filename: 'bundle.js',
    filename: '[name].js',
    publicPath: rootName+'/dist/',
    // 添加 chunkFilename
    chunkFilename: '[name].js'
    //chunkFilename: '[name].[chunkhash:8].js'
  },
  plugins: [
    //new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    /*new webpack.ProvidePlugin({
		    $: "jquery"
		}),*/
		//new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
		new webpack.optimize.CommonsChunkPlugin({ //'manifest'
        names: ['react','react_dom','react_router','react_router_redux','babel_polyfill','react_redux']
    }),
    /*new webpack.optimize.CommonsChunkPlugin({ //'manifest'
        names: ['babel_polyfill','react_router_redux']
    }),*/
		new webpack.optimize.UglifyJsPlugin({
					output: {
		        comments: false,  // remove all comments
		      },
         compress: {
            warnings: false
         },
         //mangle: false
    }),
    new webpack.DefinePlugin({
      /*'process.env': {
          NODE_ENV: JSON.stringify('production'),
      },*/
      'process.env': {
	        NODE_ENV: '"production"'
	    },
    }),
    //new ExtractTextPlugin("bundle.css")
  ],
  module: {
	    loaders: [{
	        test: /\.coffee$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: 'coffee-loader'
	    }, {
	        test: /\.css$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: "style!css",
	        //loader: ExtractTextPlugin.extract("style-loader", "css-loader")
	    }, {
	        test: /\.scss$/,
	        exclude: /(node_modules|bower_components)/,
	        loader: "style!css?modules&importLoaders=2&camelCase&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 25 versions!sass"
	        //loader: ExtractTextPlugin.extract("style-loader", "css-loader!?modules&importLoaders=2&camelCase&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass-loader")
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
	    	exclude: /(node_modules|bower_components)/,
	    	//loader: "url?limit=5000000",
	    	loader: 'url?limit=8192&name=images/[name].[ext]'
	    }]
	},
	resolve:{
		extensions:['','.js','.css','.scss'],
		/*alias:{
			'jquery':path.resolve(__dirname,'../src/plugins/jquery.min.js')
		}*/
		
	},
	/*externals: {
    Swiper: 'window.Swiper'
	}
	externals: {
    "react": 'React'
	},*/
	/*externals: {
    moment: true,
    "react": 'React',
    "react-dom": 'ReactDOM',
    "react-router": 'ReactRouter',
    "react-redux": 'ReactRedux',
    //"react-router-redux": 'ReactRouterRedux',
    //"babel-polyfill": 'babelPolyfill'
  }*/
}
