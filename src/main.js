window.onload = function() {
	var quality = document.getElementById('quality');
	var filename = document.getElementById('filename');
	var format = document.getElementById('format');
	var dButton = document.getElementById('download');
	
	dButton.onclick = function(){
		console.log("button  clicked");
		chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	    	var url = tabs[0].url;
	    	var message  = {
	    		'url' : url,
	    		'quality': quality.value,
	    		'filename': filename.value,
	    		'format': format.value
	    	};
	    	chrome.runtime.sendMessage(message);
		});
	};
}
