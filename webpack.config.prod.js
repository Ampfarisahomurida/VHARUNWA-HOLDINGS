const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'images', to: 'images' },
        { from: '*.html', to: '[name][ext]', globOptions: { ignore: ['**/index.html'] } },
        { from: 'css', to: 'css' },
        { from: 'pages.css', to: 'pages.css' },
        { from: 'pages-responsive.css', to: 'pages-responsive.css' },
        { from: 'gallery.css', to: 'gallery.css' },
        { from: 'vharunwa-logo.png', to: 'vharunwa-logo.png' },
        { from: 'icon.svg', to: 'icon.svg' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: 'icon.png', to: 'icon.png' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
