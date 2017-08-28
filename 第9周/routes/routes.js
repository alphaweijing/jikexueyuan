var service= require('../dao/service');
var moment = require('moment');
module.exports = function(app){

	app.get('/',function(req,res){
		service.select("推荐",function(err,result){
			if(err){
				res.send({msg:"System Error"});
			}
			var data=formatDate(result)
			res.render('index',{news:data});
			//res.send(result);
		})
	})
	app.get('/news/:type',function(req,res){
		service.select(req.params.type,function(err,result){
			if(err){
				res.send({msg:"System Error"});
			}else{
				res.send(result);
			}
			
		})
	})
	app.get('/admin',function(req,res){
		service.selectAll(function(err,result){
			if(err){
				res.send({msg:"System Error"});
			}else{
				var data= formatDate(result)
				res.render('admin',{news:data});
			}
			
		})
	})
	app.get('/admin/select',function(req,res){
		service.selectAll(function(err,result){
			if(err){
				res.send({msg:"System Error"});
			}else{
				res.send(result);
			}
			
		})
	})
	app.post('/admin/insert',function(req,res){
		service.insert(req.body,function(err,result){
			if(err){
				res.send({msg:"System Error"});
			}else{
				res.send({msg:"插入成功"});
			}
			
		})
	})
	app.post('/admin/delete/:id',function(req,res){
		service.delete(req.params.id,function(err,result){
			if(err){
				res.send({msg:"System Error"});
			}else{
				res.send({msg:"删除成功"});
			}
			
		})
	});
	app.post('/admin/update',function(req,res){
		service.update(req.body,function(err,result){
			if(err){
				res.send({msg:"System Error"});
			}else{
				res.send({msg:"修改成功"});
			}
			
		})
	})
}
console.log(moment("2017-01-01").format("YYYY-MM-DD HH:mm:ss"));
function formatDate(data) {
	for(i=0;i<data.length;i++){
		data[i].date = moment(data[i].date).format("YYYY-MM-DD HH:mm:ss");

	}
	return data
}