const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',//入口
  output: {
    path: path.join(__dirname, './dist/'),//导出文件夹
    filename: 'bundle.js'//导出入口
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用热更新
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  devServer: {
    hot: true, // 告诉 dev-server 使用热更新的方式
    // contentBase: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
    allowedHosts: [
      'api.botue.com'
    ],
    proxy: {
      "/api": {
        target: "http://api.botue.com/",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: { // 配置别名，加载的时候更方便
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, './src/components/'),
      assets: path.join(__dirname, './src/assets/')
    },
    extensions: ['.js', '.vue', '.json'] // 配置模块加载省略的后缀名，它会原来的默认规则给覆盖掉
  },
  devtool: 'inline-source-map', // 加入该选项就可以在控制台看到原始文件的提示信息
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|jpg|jpeg|svg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.vue$/,
      use: [
        'vue-loader'
      ]
    }
    ]
  }
}
