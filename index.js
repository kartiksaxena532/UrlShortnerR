const express = require("express");
const app = express();
const urlRoute = require("./routes/url");
const PORT =8001;
const URL = require("./models/url");
const {connectToMongoDb} = require("./connect")

connectToMongoDb("mongodb://localhost:27017/shorturl")
.then(()=> console.log("Connected to MongoDB"));

app.use(express.json());

app.use("/url",urlRoute);

app.listen(PORT,()=>console.log(`the server started at port number ${PORT}`));