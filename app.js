var express = require('express');

let port=process.env.PORT || 3000

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

app.listen(port,function(){
    console.log('you are listen to port 3000');
});
 