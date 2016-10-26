var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
 
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('./public'));
app.get('/',function(req,res){
	res.redirect('/blog/list');
})

app.use('/admin/blog',require('./routers/admin/blog'));
app.use('/blog',require('./routers/blog'))

app.listen(3000,function(){
  console.log('服务器运行于3000端口....');
});


