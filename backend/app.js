const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const requestComming = require("./routes/requestComming.route.js");
// middlewares

app.use(bodyParser.json());
app.use(cors());

// router middlewares
app.use("/", requestComming);

console.log("app listning on port 5001");
app.listen(5001);
