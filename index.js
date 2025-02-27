var express = require("express");
var app=express()

app.get("/",(req,res)=>{
    res.send("hello Saikumar");
    res.end()
})

app.listen(3003,()=>{
    console.log("Started")
})