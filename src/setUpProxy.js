const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/__/auth',
    createProxyMiddleware({
      target: 'https://tabsform-71b83.firebaseapp.com',
      changeOrigin: true,
    })
  )
}
