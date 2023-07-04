const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  console.log("Request Date:" + new Date());
  res.send("Welcome Middleware App");
});

app.listen(port, () => console.log("listen on http://localhost:${port}"));
 