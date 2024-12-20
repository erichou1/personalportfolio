module.exports = {
  publicPath: '/',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: '3000', // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
    compress: true,
    disableHostCheck: true,
  },
}
