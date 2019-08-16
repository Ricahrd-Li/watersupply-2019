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

            default: 
                fs.readFile("./public/index.html", "UTF-8", function(err, html){
                    res.writeHead(200, {"Content-Type": "text/html"});
                    res.end(html);
                });
        }
}).listen(port);