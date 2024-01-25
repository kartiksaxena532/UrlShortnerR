const express = require("express");
const app = express();
const urlRoute = require("./routes/url");
const PORT =8001;
const mongoose = require("mongoose");

app.listen(PORT,()=>console.log(`the server started at port number ${PORT}`));