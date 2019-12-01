var cont = 0
tabNum = document.getElementById("numJoga")
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var cartela = JSON.parse(this.responseText)
    for (var i = 2; i < 27; i++) {
      document.getElementsByTagName('div')[i].innerHTML = cartela[i-2]
    }
  }
}
xhttp.open("GET", "geraCartela.php", true);
xhttp.send();
var xhttpNUM = new XMLHttpRequest();
xhttpNUM.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    numJog = JSON.parse(this.responseText)
  }
}
xhttpNUM.open("GET", "geraNUM.php", true);
xhttpNUM.send();
function teste() {
  for (var i = 2; i < 27; i++) {
    console.log(document.getElementsByTagName('div')[i].innerHTML+" "+numJog[cont]);
    if (document.getElementsByTagName('div')[i].innerHTML==numJog[cont]) {
      document.getElementsByTagName('div')[i].onclick = function x() {
        this.innerHTML = "X"
        this.style.color = "green"
      }
    }
  }
}
function check(){
  contX = 0
  for (var i = 2; i < 27; i++) {
    if (document.getElementsByTagName('div')[i].innerHTML=="X") {
      contX++
    }
  }
}

function numAlet() {
  if (cont<75) {
    tabNum.innerHTML = tabNum.innerHTML+"<div>"+numJog[cont]+"</div>"
    teste()
    cont++
    check()
    if (contX == 25) {
      window.alert("PARABÉNS VOCÊ GANHOU!!!!");
    }
  }
  else {
    window.alert( "PERDESTE" );

  }
}
