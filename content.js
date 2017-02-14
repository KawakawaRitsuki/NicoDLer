chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  sendResponse($("video").attr("src")+ "ç"+document.title);
});

