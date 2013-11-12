http = require 'http'
mod = require './mod'

http
  .createServer((req, res) ->
    console.log req.method, req.url
    data = 'hi\n' + mod.hello('world') + '\n'
    res.writeHead 200,
      'Content-Type': 'text/plain'
      'Content-Length': data.length
    res.end data
  )
  .listen(3000)

