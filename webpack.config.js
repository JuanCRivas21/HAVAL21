import path from 'path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],  // order matters: right-to-left
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',               // webpack 5 built-in, no loader needed
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
        exclude: /index\.html$/,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',   // uses your HTML as a template
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
    open: true,
  },
}
