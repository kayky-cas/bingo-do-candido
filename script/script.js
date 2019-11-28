var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    cartela = JSON.parse(this.responseText)
    for (var i = 2; i < 27; i++) {
      document.getElementsByTagName('div')[i].innerHTML = cartela[i-2]
    }
  }
}
xhttp.open("GET", "geraCartela.php", true);
xhttp.send();

function numAlet() {
  var xhttpNUM = new XMLHttpRequest();
  xhttpNUM.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  }
  xhttpNUM.open("GET", "geraNUM.php", true);
  xhttpNUM.send();
}
//sdsdsd
