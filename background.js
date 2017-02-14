(function(){
  chrome.tabs.onUpdated.addListener(function(tabId){
    chrome.tabs.get(tabId, function(tab) {
      if(tab.url.indexOf('http://www.nicovideo.jp/watch/sm') == 0 || tab.url.indexOf('https://www.nicovideo.jp/watch/sm') == 0){
        chrome.pageAction.show(tabId);
      }
    });
  })

  chrome.pageAction.onClicked.addListener(function(tab){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tab.id, {
        dl: 'dl'
      },
      function(msg) {
        var a = msg.split("ç")
        aEle=document.createElementNS("http://www.w3.org/1999/xhtml", "a");
	    	aEle.href=a[0];
    		aEle.download=a[1];
	  	  aEve=document.createEvent("MouseEvents");
		    aEve.initMouseEvent("click",true,false,self,0,0,0,0,0,false,false,false,false,0,null);
    		aEle.dispatchEvent(aEve);
      });
    });
  });

})();
