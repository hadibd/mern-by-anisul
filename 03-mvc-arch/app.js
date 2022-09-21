const express = require("express");
const userRouter = require("./routes/user-route");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(userRouter)

module.exports = app;