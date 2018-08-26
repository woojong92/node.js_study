var express = require('express');
var app = express();

app.use(express.static('public'));//public이라는 디렉토리를 정적으로

app.get('/', function(req, res){
  res.send('<h1>Hello home page<h1>');
});
app.get('/dynamic', function(req, res){
  var lis='';
  var time=Date();
  for(var i=0; i<5; i++){
    lis=lis+'<li>coding</li>'
  }
  var output=`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic!
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>
  `
  res.send(output);
})



app.get('/route', function(req, res){
  res.send('Hello Router, <img src="/nodejs_logo.jpg">')
})
app.get('/login', function(req, res){
  res.send('Login please');
});

app.listen(3000, ()=>{
  console.log('Connected 3000 port!');
});
