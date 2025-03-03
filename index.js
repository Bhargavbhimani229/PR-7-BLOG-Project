const express = require("express");
const db = require("./configs/database");
const port = 8015;

const app = express();

app.set("view engine", "ejs");

app.use("/",require("./routers"));

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("server runs on\nhttp://localhost:" + port);
  }
});