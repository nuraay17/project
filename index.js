const express=require('express');
var app =express();
var bodyparser=require('body-parser');
var db=require('mongoose');


app.set('view engine','ejs');
db.connect('mongodb://nuray:nuray123@ds111492.mlab.com:11492/project');
var schema=new db.Schema({
  name:String,
  surname:String,
  email:String,
  phone:String,
  country:String,
  state:String,
  city:String,
  adress:String,
  post:String,
  uni:String,

});
var ReqModel=db.model('ReqModel',schema);

app.use(express.static(__dirname+'/public'));
var urlEncoder=bodyparser.urlencoded({extended:false});

app.get('/about',function (req,res) {
  res.sendFile(__dirname+"/about.html")
});
app.get('/contact',function (req,res) {
  res.sendFile(__dirname+"/contact.html")
});
app.get('/',function (req,res) {
  res.sendFile(__dirname+"/index.html");
});
app.get('/reg',function (req,res) {
  res.sendFile(__dirname+"/index2.html");
});
app.get('/ishem',function (req,res) {
  res.sendFile(__dirname+"/ishem_rabotu.html")
});
app.get('/job',function (req,res) {
  res.sendFile(__dirname+"/job.html")
});
app.get('/kuda',function (req,res) {
  res.sendFile(__dirname+"/kuda_luche.html")
});
app.get('/1',function (req,res) {
  res.sendFile(__dirname+"/new_york_1.html")
});
app.get('/2',function (req,res) {
  res.sendFile(__dirname+"/new_york_2.html")
});
app.get('/prog',function (req,res) {
  res.sendFile(__dirname+"/prog.html")
});
app.get('/resume',function (req,res) {
  res.sendFile(__dirname+"/resume.html")
});
app.get('/shop',function (req,res) {
  res.sendFile(__dirname+"/shopping.html")
});
app.get('/travel',function (req,res) {
  res.sendFile(__dirname+"/travel.html")
});
app.get('/usa',function (req,res) {
  res.sendFile(__dirname+"/usa.html")
});
app.get('/work',function (req,res) {
  res.sendFile(__dirname+"/work.html")
});



app.post('/reg',urlEncoder,function (req,res) {
  var item=ReqModel({name:req.body.name,surname:req.body.surname,email:req.body.email,phone:req.body.phone,
                        country:req.body.country, state:req.body.state,city:req.body.city,adress:req.body.adress,
                        post:req.body.post,uni:req.body.uni}).save(
    function (err) {
      if (err) {
        throw err;
      }
      else {
        console.log("OK");
      }
    }
  )
  res.sendFile(__dirname+"/index.html");
})

app.listen(3000,function () {
  console.log("Connected");
});
