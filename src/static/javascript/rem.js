/**
 * rem适配
 */

(function(win) {
  var docEl = win.document.documentElement,
    tid;

  function refreshRem() {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth > 800) {
      clientWidth = 800;
    }
    var rem = 20 * (clientWidth / 375);
    docEl.style.fontSize = rem + "px";
    var actualSize = parseFloat(window.getComputedStyle(docEl)["font-size"]);
    if (actualSize !== rem) {
      var remScaled = rem / (actualSize / rem);
      docEl.style.fontSize = remScaled + "px";
    }
  }

  function dbcRefresh() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 100);
  }

  win.addEventListener(
    "resize",
    function() {
      dbcRefresh();
    },
    false
  );
  win.addEventListener(
    "pageshow",
    function(e) {
      if (e.persisted) {
        dbcRefresh();
      }
    },
    false
  );
  refreshRem();
})(window);
