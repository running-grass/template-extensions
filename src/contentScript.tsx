function addScript(url) {
  var s = document.createElement('script');
  s.src = url;
  // s.remove()
  s.onload = function () {
    (this as HTMLScriptElement).remove();
  };
  (document.head || document.documentElement).appendChild(s);
}


addScript(chrome.runtime.getURL('injects/download.js'));