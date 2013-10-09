var http = require('http');

function func(arg1, arg2) {
  var result = 'Hello from func. ';
  result += arg1;
  result += ' ';
  result += arg2;
  return result;
}

var server = http.createServer(function(req, resp) {
  var str = 'string',
      num = 10,
      array = [1, 2, 3, 4, 5],
      buffer = new Buffer('x'),
      undef;

  resp.setHeader('Content-Type', 'text/plain');
  resp.end(func(str, num) + '\n');
});

server.listen(3000, function() {
  console.log('listening on port 3000');
});

