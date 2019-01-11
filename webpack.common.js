const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

module.exports = {
  entry: {
    styles: './app/src/styles/application.scss',
    index: './app/src/scripts/views/index.js',
    me: './app/src/scripts/views/me.js',
  },
  module: {
    rules: [
      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader", // creates style nodes from JS strings
      //     "css-loader", // translates CSS into CommonJS
      //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
      //   ]
      // },

      // {
      //   test: /\.(html)$/,
      //   use: ['html-loader']
      // },
      {
        test: /\.scss$/,
        // use: [
        //   'style-loader',
        //   MiniCssExtractPlugin.loader,
        //   'css-loader',
        //   {
        //     loader: 'sass-loader',
        //     options: {
        //       includePaths: [path.resolve(__dirname, "node_modules/foundation-sites/scss")]
        //     }
        //   }
        // ],
        use:  [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }, 
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),

    // new CopyWebpackPlugin([{
    //   from:'.app/src/assets/images/',
    //   to: 'images/[name].[ext]'
    // }]), 
    new MiniCssExtractPlugin({
      filename: "application.css"
    }),
    new HtmlWebpackPlugin({
      title: 'Francisco Vera',
      filename: 'index.html',
      template: './app/src/views/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'About Me',
      filename: 'me/index.html',
      template: './app/src/views/me.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Work',
      filename: 'work/index.html',
      template: './app/src/views/work.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Writings',
      filename: 'writings/index.html',
      template: './app/src/views/writings.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      title: 'Writings Post',
      filename: 'writings/writings-post/index.html',
      template: './app/src/views/writings-post.html',
      chunks: ['index'],
    }),
    // new HtmlWebpackPlugin({
    //   title: 'About Page',
    //   filename: 'about.html',
    //   template: './app/src/views/about.html',
    //   chunks: ['about'],
    // }),
    new HtmlBeautifyPlugin({
      config: {
        html: {
          end_with_newline: true,
          indent_size: 2,
          indent_with_tabs: false,
          indent_inner_html: true,
          preserve_newlines: false
        }
      }
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'app/dist')
  },
};