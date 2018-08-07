let http = require("http");
let url = require("url");
let util = require("util");
let fs = require("fs");
// fs:文件系统

let server = http.createServer((req,res)=>{
	// res.end(util.inspect(url.parse(req.url)));
	// console.log(url.parse(req.url));

	var pathname = url.parse(req.url).pathname.substring(1);
	
	fs.readFile(pathname, (err,data)=>{
		console.log(pathname);
		if (err) {
			res.writeHeader(404,{
				"Content-Type":"text/html"
			});
		}else{
			res.writeHeader(200,{
				"Content-Type":"text/html"
			})
			res.write(data.toString());
		}
		res.end();
	});
});
server.listen(3000,'127.0.0.1',()=>{
	console.log("服务器已运行，请打开浏览器输入: http://127.0.0.1:3000/来运行");
});