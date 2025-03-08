const express = require("express");
const db = require("./configs/database");
const blogRedirect = require("./middlewares/blogRedirect");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const port = 8076;

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.set("view engine", "ejs");

app.use(blogRedirect);
app.use("/uploads",express.static(__dirname + '/uploads'));
app.use("/",require("./routers"));


app.listen(port, (err) => {
  
  if (!err) {
    db();
    console.log("server runs on\nhttp://localhost:" + port);
  }
});