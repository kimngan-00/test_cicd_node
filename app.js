const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    return res.send("hello cicd");
})
app.listen(3000,console.log("connect at port 3000"))