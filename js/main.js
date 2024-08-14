function onloadIndex(){
	fetch("../exchangeKokoro/index.html") //ロード元URL
    .then(data => data.text())
    .then(html => document.getElementById("exchangeKokoro").innerHTML = html)
	fetch("../kokoroMichi/index.html") //ロード元URL
    .then(data => data.text())
    .then(html => document.getElementById("kokoroMichi").innerHTML = html)
}