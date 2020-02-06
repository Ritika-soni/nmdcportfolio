const express = require('express');
const ejs = require('ejs');

const app = express();
// set the view engine to ejs
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

// res.render() looks for file in views folder only

//index page
app.get('/',(req,res)=>{
  res.render('pages/index',{   
    currentYear: new Date().getFullYear()
  });
});

//home page
app.get('/home',(req,res)=>{
  res.render('pages/home',{
    header: "Home Page",
    currentYear: new Date().getFullYear()
  });
});

//about page
app.get('/about',(req,res)=>{
  res.render('pages/about',{
    currentYear: new Date().getFullYear()
  });
});

//project head page
app.get('/project_head',(req,res)=>{
  res.render('pages/project_head',{
    currentYear: new Date().getFullYear()
  });
});

//description page
app.get('/description',(req,res)=>{
  res.render('pages/description',{
    currentYear: new Date().getFullYear()
  });
});

//description page
app.get('/news',(req,res)=>{
  res.render('pages/news',{
    currentYear: new Date().getFullYear()
  });
});

//description page
app.get('*',(req,res)=>{
  res.send("Oops!Page not found");
});

//const HOSTNAME = process.env.HOSTNAME||'127.0.0.1';
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}/`);
});