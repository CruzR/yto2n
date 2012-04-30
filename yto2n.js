(
var embeds = $("embed[src^='http://www.youtube.com/v/']");
var nocookie = $("embed[src^='http://www.youtube-nocookie.com/v/']");
var embeds_https = $("embed[src^='https://www.youtube.com/v/']");
var nocookie_https = $("embed[src^='https://www.youtube-nocookie.com/v/']");

for(var i = 0; i < embeds.length; i++) {
	var src = embeds[i].src;
	var dx = embeds[i].width;
	var dy = embeds[i].height;
	var parent = embeds[i].
}
)
