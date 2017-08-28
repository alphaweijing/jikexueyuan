var connection=require('../config/dbconnect');
var Service = function() {}
Service.prototype.insert = function(news,callback){
	var sql="insert into news(type,title,img,date) value(?,?,?,?)";
	connection.query(sql,[news.type,news.title,news.img,news.date],function(err,result){
		if(err){
			console.log(err);
			throw err;
			return;
		}
		callback(err,result);
	});
}
Service.prototype.delete = function(id,callback){
	var sql = "delete from news where id=?";
	connection.query(sql,[id],function(err,result){
		if(err){
			console.log(err);
			throw err;
			return;
		}
		callback(err,result);
	});
}     
Service.prototype.update = function(news,callback){
	var sql = "update news set type=?,title=?,img=?,date=? where id=?";
	connection.query(sql,[news.type,news.title,news.img,news.date,news.id],function(err,result){
		if(err){
			console.log(err);
			throw err;
			return;
		}
		callback(err,result);
	});
} 
Service.prototype.select = function(type,callback){
	var sql = "select * from news where type=?";
	connection.query(sql,[type],function(err,result){
		if(err){
			console.log(err);
			throw err;
			return;
		}
		callback(err,result);
	});
} 
Service.prototype.selectAll = function(callback){
	var sql = "select * from news";
	connection.query(sql,function(err,result){
		if(err){
			console.log(err);
			throw err;
			return;
		}
		callback(err,result);
	});
}
module.exports = new Service();

