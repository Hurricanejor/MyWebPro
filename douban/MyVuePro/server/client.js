let http = require("http");
let util = require("util");

http.get("http://book.douban.com/j/home/ebooks?user_id=",(res)=>{
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