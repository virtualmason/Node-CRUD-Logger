var config = {
  entry: "./main.js",

  output: {
    filename: "bundle.js",
  },
    module: {
        loaders: [      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
],
    },
  }

module.exports = config;
