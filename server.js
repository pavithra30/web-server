const express=require('express');
const hbs=require('hbs');

const port=process.env.PORT || 3000;
var app=express();
hbs.registerPartials(__dirname+'/views/partials')
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
  res.render('home.hbs',{pageTitle:'Home page',
    welcomeMessage:'Welcome to my webite',currentYear:new Date().getFullYear()
});
});
 app.get('/about',(req,res)=>{
   res.render('about.hbs',{
     pageTitle:'About page',
     currentYear:new Date().getFullYear()
   });
 });
 app.get('/projects',(req,res)=>{
   res.render('projects.hbs',{
     pageTitle:'Projects'
   });
 });
 app.get('/bad',(req,res)=>{
   res.send({
     errorMessage:'unable to handle request'
   });
 });

 app.listen(port,()=>{
   console.log("app started");
 });

//8711dd70c36b83855f18d16779565a9031984ecc
