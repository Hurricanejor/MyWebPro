let user = require("./User");
// console.log(`userName:${user.userName}`);
// console.log(`${ user.sayHello() },I am ${user.userName}`);

console.log(`userName:${user.userName2}`);
console.log(`${ user.sayHello2() },I am ${user.userName2}`);

let http = require("http");
let url = require("url");
let util = require("util");

let server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader("Content-Type","text/plain; charset=utf-8");
	res.end(util.inspect(url.parse(req.url)));
});
server.listen(3000,'127.0.0.1',()=>{
	console.log("服务器已运行，请打开浏览器输入: http://127.0.0.1:3000/来运行");
});