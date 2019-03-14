const http = require('http');
const qs = require('querystring');

const hostname = '127.0.0.1';
const port = 100;

const server = http.createServer((req, res) => {
    var body = '';
    // console.log(req);
    // console.log('New request from' + req.ip);
    if(req.method == 'POST'){
        req.on('data', function (data){
            body += data;
            if (body.length > 1e6) {
                req.connection.destroy();
            }
            req.on('end', function (){
            var data = JSON.parse(body);
            console.log(data);
            if(data.request == 'create_new_user'){
                console.log('create new user request!');
            }
            res.end("I bought it")
            });
        });
    }
    if(req.method == 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
