const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use("/", (req, res, next) => {
  res.send(`
    <form action="">
        <input type="text" placeholder="enter name" name="name">
        <input type="email" placeholder="enter email" name="email">
        <button type="submit">submit</button>
    </form>`);
  console.log(req.url);
  next();
});


app.post("/", (req, res, next) => {
  console.log("first handelling", req.url, req.method, req.body);
  req.next();
});

app.use(bodyParser.urlencoded());

app.post("/", (req, res, next) => {
  console.log(
    "handelling contect us POST method",
    req.url,
    req.method,
    req.body
  );
  res.send("<h1> we ll contact you shortly</h1>");
});

const PORT = 4200;

app.listen(PORT, () => {
  console.log("server is running at PORT : ", PORT);
})