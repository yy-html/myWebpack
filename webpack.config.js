const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const mod = {
  sassLoader: global.development ? MiniCssExtractPlugin.loader : 'style-loader'
}

module.exports = {
  mode: 'development',
  entry: {
    index: [
      // 'react-hot-loader/patch',
      './src/index.js',
    ],
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name]-[id].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    host: 'localhost',
    port: 3000,
    // 启动HMR 局部热刷新 默认不针对js文件 或在入口处设置
    hot: true, 
    // 刷新整个页面 如果使用hot模式 这个默认false
    // inline: true,
    // disableHostCheck: true,
    // compress: true,
    // open: true,
    // progress: true
  },
  module: {
    // unknownContextCritical : false,
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/, 
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            'react-hot-loader/babel'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:8]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          mod.sassLoader,
          'css-loader',
          'sass-loader'
    　　 ],
        // {
        //   loader: 'sass-loader',
        //   options: {
        //     modules: true,
        //     localIdentName: '[local]_[hash:8]'
        //   }
        // }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          // options: {
          //   attrs: [':data-src']
          // }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    }),
    // 启动hot模式默认添加插件
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')], // 配置寻找第三方库的时候的位置
    extensions: [" ", ".js", ".jsx"],
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  }
}

// babel-polyfil
// transform-runtime