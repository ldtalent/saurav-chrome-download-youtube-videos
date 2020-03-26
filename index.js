var express = require('express');
var app = express();
var ytdl = require('ytdl-core');

app.listen('4000', function(){
	console.log("listening on 4000");
});

app.get('/download', function(req, res) {
	var link = req.query.url;
	var format = req.query.format;
	var quality = req.query.quality;
	console.log(link);
	console.log(format);
	console.log(quality);

	video = ytdl(link,{
		format:format,
		quality:quality,
	});
	video.pipe(res);
});