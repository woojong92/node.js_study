var express = require('express');
var app = express();
var bodyParser=require('body-parser');

app.locals.pretty=true;
app.set('view engine', 'jade');//jade template 연결
app.set('views', './views');
app.use(express.static('public'));//public이라는 디렉토리를 정적으로
app.use(bodyParser.urlencoded({extended: false}));

app.get('/form', function(req, res){
  res.render('form');
});

app.post('/form_receiver', function(req, res){
  var title=req.body.title;
  var description=req.body.description;
  res.send(title+','+description);
})

app.get('/form_receiver', function(req, res){
  var title=req.query.title;
  var description=req.query.description;
  res.send(title+','+description);
});

app.get('/topic/:id', function(req, res){
  var topics=[
    'JavaScript is ...',
    'Nodejs is ...',
    'Express is ...',
  ];

  var output =`
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br>
    ${topics[req.params.id]}
  `
  res.send(output);
});

/*
app.get('/topic', function(req, res){
  var topics=[
    'JavaScript is ...',
    'Nodejs is ...',
    'Express is ...',
  ];

  var output =`
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br>
    ${topics[req.query.id]}
  `
  res.send(output);
});
*/
app.get('/template', function(req, res){
  res.render('temp', {time: Date(), _title: 'jade'});//렌더링
});

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
