var express = require('express');
var url  = require('url');

app=express();

app.get('/',function(req,res){

	// res.json({status:1});
	res.send("worked")
})

var port = process.env.PORT || 1337;
app.listen(port, function() {
	console.log("port " + port);
});