const express = require("express");
const app = express();

const PORT =8001;

console.log("hello");

app.get("/api",(req,res)=>{
   const result= console.log("hello mere bete");
   res.send(result);
})

app.listen(PORT,()=>console.log(`the server started at port number ${PORT}`));