var config = {
  entry: "./main.js",
devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
  output: {
    filename: "./public/bundle.js",
  },
    module: {
        loaders: [      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
],
    },
  }

module.exports = config;
