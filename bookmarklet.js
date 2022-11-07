javascript:req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/VirescentOverlord/History-flood/main/main.js');
req.onload = function() {
  eval(this.responseText + 'm.appendChild(r)');
};
req.send();
