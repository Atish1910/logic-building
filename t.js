const http = require("http");

const requestListner = (req, res) => {
  console.log("i am Listeneing", req.method);
  res.end("Hello World");
};

const server = http.createServer(requestListner);

const PORT = 4200;

server.listen(PORT, () => {
  console.log("Server is Running at ", PORT);
});
