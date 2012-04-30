// Setup regular expressions.
// regex[0]: The filter rule which is used to detect old embedding style.
// regex[1]: The first part of the new style url.
// regex[2]: The video id of the new style url.
regex = new Array();
regex.push(new RegExp("https?://www.youtube(-nocookie)?.com/v/"));
regex.push(new RegExp("https?://www.youtube(-nocookie)?.com/"));
regex.push(new RegExp("/[\\w\\-]{11}"));

// Convert old style url to new style url.
encode_url = function(url) {
	return regex[1].exec(url)[0] + "embed" + regex[2].exec(url)[0];
};

// Replace old embedding style with new one.
o2n = function() {
	var embed = $(this).children("embed")[0];
	var dx = embed.width;
	var dy = embed.height;
	var src = encode_url(embed.src);
	return "<iframe width='" + dx + "' height='" + dy
		+ "' src='" + src + "' frameborder='0' allowfullscreen>"
		+ "</iframe>";
};

// Find videos using old embedding style and convert them.
$("object").filter(function(index) {
	return ($("embed", this).length == 1) && regex[0].test($("embed", this)[0].src);
}).replaceWith(o2n);
