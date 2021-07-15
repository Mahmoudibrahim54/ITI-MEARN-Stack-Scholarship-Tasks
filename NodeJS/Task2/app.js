var http = require("http");
var fs = require("fs");

var resDir = __dirname + "\\resources";
console.log(resDir);

http
  .createServer(function (req, res) {
    res.setHeader("content-type", "text/html");
    fs.readdir(resDir, function (err, files) {
      if (req.url === "/") {
        res.write("<ul>");
        for (let i = 0; i < files.length; i++) {
          let splitPath = files[i].split(".");
          res.write(
            "<li><a href=" + splitPath[0] + ">" + files[i] + "</a></li>"
          );
        }
        res.write("</ul>");
      } else {
        for (let i = 0; i < files.length; i++) {
          let splitPath = files[i].split(".");
          if (req.url === "/" + splitPath[0]) {
            switch (splitPath[1]) {
              case "css":
                fs.promises
                  .readFile("./resources/" + files[i])
                  .then((file) => {
                    res.writeHead(200, {
                      "content-type": "text/css",
                    });
                    res.write(file);
                    res.end();
                  })
                  .catch((err) => {
                    res.statusCode = 500;
                    res.end("resource is not loading");
                  });
                break;
              case "html":
                fs.promises
                  .readFile("./resources/" + files[i])
                  .then((file) => {
                    res.writeHead(200, {
                      "content-type": "text/html",
                    });
                    res.write(file);
                    res.end();
                  })
                  .catch((err) => {
                    res.statusCode = 500;
                    res.end("resource is not loading");
                  });
                break;
                case "txt":
                fs.promises
                  .readFile("./resources/" + files[i])
                  .then((file) => {
                    res.writeHead(200, {
                      "content-type": "text/txt",
                    });
                    res.write(file);
                    res.end();
                  })
                  .catch((err) => {
                    res.statusCode = 500;
                    res.end("resource is not loading");
                  });
                break;
              case "jpeg":
                fs.promises
                  .readFile("./resources/" + files[i])
                  .then((file) => {
                    res.writeHead(200, {
                      "content-type": "image/jpeg",
                    });
                    res.write(file);
                    res.end();
                  })
                  .catch((err) => {
                    res.statusCode = 500;
                    res.end("resource is not loading");
                  });
                break;

              default:
                res.statusCode = 404;
                res.end();
            }
          }
        }
      }
    });
  })
  .listen(3000, function () {
    console.log("server start at port 3000");
  });
