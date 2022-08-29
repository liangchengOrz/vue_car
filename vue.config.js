module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://dahua0822-api.herokuapp.com', 
        pathRewrite: { '^/api': '' },  
        ws: true, 
        changeOrigin: true
      }
    }
  }
}







