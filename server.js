var express = require('express');
var app = express();

//middleware definition
app.use(express.static(__dirname))
app.use(express.static(__dirname+'/public'))
app.use('/bower_components',express.static(__dirname+'/bower_components'))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.sendFile('index.html',{root:'/public'})
})

app.listen(3000,function(err){
    if(err)
        console.log("Error Occured"+err)
    else
        console.log("Port is Running at 3000")
})