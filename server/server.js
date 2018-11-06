const path = require('path');
const publicPath = path.join(__dirname, '/../public');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//app.use(bodyParser.json());

app.listen(port, () => {   
    console.log(`App started at port: ${port}`);
});


app.get('/', (req,res,next) => {
    res.send("Hello World!");
})

