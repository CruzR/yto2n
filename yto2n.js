encode_url = function(url) {
	var start = new RegExp("https?://www.youtube(-nocookie)?.com/");
	var vid = new RegExp("/[a-zA-Z0-9]{11}");
	return start.exec(url)[0] + "embed" + vid.exec(url)[0];
};

o2n = function() {
	var embed = $(this).children("embed")[0];
	var dx = embed.width;
	var dy = embed.height;
	var src = encode_url(embed.src);
	return "<iframe width='" + dx + "' height='" + dy
		+ "' src='" + src + "' frameborder='0' allowfullscreen>"
		+ "</iframe>";
};

$("embed[src^='http://www.youtube.com/v/']:parent").replaceWith(o2n);
$("embed[src^='http://www.youtube-nocookie.com/v/']:parent").replaceWith(o2n);
$("embed[src^='https://www.youtube.com/v/']:parent").replaceWith(o2n);
$("embed[src^='https://www.youtube-nocookie.com/v/']:parent").replaceWith(o2n);
