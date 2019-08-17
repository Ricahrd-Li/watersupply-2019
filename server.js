const http = require('http');
const fs = require('fs');
var path = require('path');

//For Heroku 
let port = process.env.PORT;
if(port == null || port == ""){
  port = 8080;
}

//A simple server
    http.createServer(function(req, res){
        console.log(req.url);
        // # not good code!
        switch (req.url){
            case "/style.css" :
                fs.readFile("./public/style.css", "UTF-8", function(err, css){
                    res.writeHead(200, {"Content-Type": "text/css"});
                    res.end(css);
                });
                break;

            case "/USTC.png":
                fs.readFile("./public/USTC.png", function(err,img){
                    res.writeHead(200, {"Content-Type": "image/png"});
                    res.end(img);
                });
                break;

            case "/main.js":
                fs.readFile("./public/main.js", function(err,js){
                    res.writeHead(200, {"Content-Type": "application/javascript"});
                    res.end(js);
                });
                break;

            case "/favicon.ico":
                    fs.readFile("./public/logo.ico", function(err,ico){
                        res.writeHead(200, {"Content-Type": "image/x-ico"});
                        res.end(ico);
                    });
                    break;
            default: 
                fs.readFile("./public/index.html", "UTF-8", function(err, html){
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(html);
                });
        }
}).listen(port);