var http = require('http');
var url = require('url');
var router = require('./models/Router');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  if (request.url !== "/favicon.ico") {

    var pathname = url.parse(request.url).pathname;
    pathname = pathname.replace(/\//, '');
    router[pathname](request, response);

    //optfile.readfileSync('./views/login.html');
    /*
    function recall(data){
      response.write(data);
      response.end('ok');
    }
    optfile.readfile('./views/login.html', recall);
    console.log('主程序执行完毕');
    */
  }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');
//recall 闭包