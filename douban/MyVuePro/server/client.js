let http = require("http");
let util = require("util");

http.get("http://m.douban.com/movie/comedy",(res)=>{
	let data = "";
	res.on("data",(chunk)=>{
		data += chunk;
	});

	res.on("end",()=>{
		console.log(data);
		// let result = JSON.parse(data);

		// console.log(util.inspect(result));
		// util调试

		// console.log(result);
	});
})