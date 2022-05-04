const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("welcome to the home page body");
})

const port = process.env.port || 3000;
app.listen(3000,() => {
    console.log("CHEARSSSS");
})