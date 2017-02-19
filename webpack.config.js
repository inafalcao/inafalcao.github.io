var path = require('path');

module.exports = {
	entry: './src/js/index.js',
    
    output: {
        path: path.join(__dirname,  '/'), 
        filename: './bundle.js'
    },
    
    module: {
	    loaders: [{
	        test: /\.js$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	        query: {
	            presets: ['es2015']
	        }
	    }]
	},
	
	devServer: {
	    inline: true,
	    contentBase: __dirname,
	    port: 9000
	}
}
