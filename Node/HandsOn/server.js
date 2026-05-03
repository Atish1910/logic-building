const http = require("http");
const server = http.createServer((req, res) => {
  if(req.url == "/"){
    res.end("hello i am index page")
  }else if(req.url == "/about"){
    res.end("hello i am About page")
  }else if(req.url == "/career"){
    res.end("hello i am career page")
  }
});

const PORT = 4209;

server.listen(PORT, () => {
  console.log("server is running at PORT : ",PORT)
})