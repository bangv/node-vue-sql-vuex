// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  },
  proxyTable: {
    '/api': {
      target: 'http://localhost:8088/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
