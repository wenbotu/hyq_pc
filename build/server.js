var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.dev.config')
var path = require('path')

var express = require('express')
var app = new (require('express'))()
var port = 8000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

/*app.get("/", function(req, res) {
  //res.sendFile(__dirname + '/src/index.html')
  res.sendFile(path.resolve(__dirname,'../src/index.html'));
})*/
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

