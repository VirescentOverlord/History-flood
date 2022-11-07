"use strict";
void
function(a) {
  var b = function() {
    let iframe = document.createElement('iframe');
    document.body.append(iframe);
    window.alert = iframe.contentWindow.alert.bind(window);
    window.prompt = iframe.contentWindow.prompt.bind(window);
    iframe.remove();

    var a = prompt("How many times do you want this tab to appear in history?");
    finish = !1,
      tab = window.location.href;
    for (var b = 1; b <= a; b++) history.pushState(0, 0, b == a ? tab : b.toString()),
      b == a && (finish = !0);
    !0 === finish && alert("(" +tab + ")" + " now appears in history " + a + (1 == a ? " time." : " times."))
  };
  if (a && a.fn && 1.7 <= parseFloat(a.fn.jquery)) return void load(a);
  var c = document.createElement("script");
  c.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js", c.onload = c.onreadystatechange = function() {
    var a = this.readyState;
    a && "loaded" !== a && "complete" !== a || b(jQuery.noConflict())
  }, document.getElementsByTagName("head")[0].appendChild(c)
}(window.jQuery);
