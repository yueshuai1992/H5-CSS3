var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/",function (res,req) {
	 res.send("hello")
})
app.listen(3000);
console.log("服务器启动！")