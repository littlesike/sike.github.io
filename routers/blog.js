var express = require('express');
var router = express.Router();
var dal = require('../common/dalData'); 

/// 文章列表 
router.get('/list',function(req,res){
	var data = dal.getData();
	res.render('blog/list',{list:data});
});
 
/// 单篇文章
router.get('/detail/:id',function(req,res){
	// console.log(req.params.id);
	dal.updateViewTimes(req.params.id);
	var data = dal.getDataByID(req.params.id);
	res.render('blog/detail',{data:data});
});

module.exports = router;