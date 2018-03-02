const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');
// const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/thirdpage') {
      fs.readFile('third.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if(page == '/css/style2.css'){
    fs.readFile('css/style2.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/api') {
    if('sex' in params){
      if(params['sex']== 'male'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          msg: "Sorry, You're a Man!"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['sex'] == 'female'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          msg: "Congratulations You're a Woman!"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    console.log("Something went wrong");

  }
  // else{
  //   figlet('404!!', function(err, data) {
  //     if (err) {
  //         console.log('Something went wrong...');
  //         console.dir(err);
  //         return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
  // }
});

server.listen(8000);
