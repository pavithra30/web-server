const express=require('express');
const hbs=require('hbs');
var app=express();
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  res.render('home.hbs',{welcomeMessage:'Welcome to my webite',currentYear:new Date().getFullYear()
});
});
 app.get('/about',(req,res)=>{
   res.render('about.hbs',{
     pageTitle:'About page',
     currentYear:new Date().getFullYear()
   });
 });
 app.get('/bad',(req,res)=>{
   res.send({
     errorMessage:'unable to handle request'
   });
 });

 app.listen(3000);
