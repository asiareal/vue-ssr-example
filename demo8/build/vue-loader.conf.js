const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  preserveWhitespace: false,
  extractCSS: isProd
}
