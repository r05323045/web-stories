module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/web-stories/'
    : '/',
  devServer: {
    proxy: 'http://localhost:8080'
  }
}
