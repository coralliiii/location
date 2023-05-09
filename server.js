//创建一个nodejs服务器

//设置服务器端口
var port=8084;
//导入http模块，有些模块灭有的话需要自己安装：npm install + 模块名
var http = require('http');
var fs = require('fs');

//初始化时间，用来写日志的，不加也行
function loc_time() {
	var time_ = new Date();
	var loc_time_ = time_.getFullYear()+"-"+(time_.getMonth()+1)+"-"+time_.getDate()+" "+time_.getHours()+":"+time_.getMinutes()+":"+time_.getSeconds()+"\t";
	return loc_time_;
}


//创建app
var app = http.createServer((req,res)=>{
	// req:请求对象，包含一些查询参数、请求体，请求路径，cookie 请求域..
	//获取请求路径
	let url = req.url;
	console.log(loc_time()+'url ==> %s',url);
	console.log(loc_time()+'method ==> %s',req.method);
	if(url == '/'){
		// 设置响应头
		res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
		fs.readFile("./location.html","utf-8",function(err,data){
			if (err){
				console.log(loc_time()+"location.html loading is failed :"+err);
			}else{
				//返回location.html页面
				// console.log(loc_time()+"");
             	res.end(data);
			}
		});
	}else{
		// 设置响应头
		res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
		// res :响应对象
		res.end('Fatal Error');
	}
});

// 监听端口
app.listen(port,()=>{
	console.log(loc_time()+'the server running at http://127.0.0.1:'+port);
});
