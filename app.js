var express = require('express');


var app=express();

app.set('view engine','ejs')
app.use(express.static('./public'))

app.get('/main',function(req,res){
    res.render('main')
})
app.get('/contact',function(req,res){
    res.render('contact')
})
app.get('/technique',function(req,res){
    res.render('technique')
})

app.listen(3000);
console.log('you are listen to port 3000');