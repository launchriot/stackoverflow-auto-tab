chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. StackOverflow links should now open in a new tab.");
		var anchors = document.getElementsByTagName('a');
			for (var i=0; i<anchors.length; i++){
			anchors[i].setAttribute('target', '_blank');
			}
		// ----------------------------------------------------------

	}
	}, 10);
});