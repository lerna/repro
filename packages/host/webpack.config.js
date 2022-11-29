const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        mfe1: 'mfe1@http://localhost:3001/remoteEntry.js',
        mfe2: 'mfe2@http://localhost:3002/remoteEntry.js',
        mfe3: 'mfe3@http://localhost:3003/remoteEntry.js',
        mfe4: 'mfe4@http://localhost:3004/remoteEntry.js',
        mfe5: 'mfe5@http://localhost:3005/remoteEntry.js',
        mfe6: 'mfe6@http://localhost:3006/remoteEntry.js',
        mfe7: 'mfe7@http://localhost:3007/remoteEntry.js',
        mfe8: 'mfe8@http://localhost:3008/remoteEntry.js',
        mfe9: 'mfe9@http://localhost:3009/remoteEntry.js',
      },
    }),
  ],
};
