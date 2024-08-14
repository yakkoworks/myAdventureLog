function initKokoroMich(){
    fetch("../kokoroMichi/01.html") //ロード元URL
    .then(data => data.text())
    .then(html => document.getElementById("content").innerHTML = html)
    var nav = document.getElementById("nav-01");
    nav.classList.add("active");
}

function jump(index){
    fetch("./"+index+".html") //ロード元URL
    .then(data => data.text())
    .then(html => document.getElementById("content").innerHTML = html)

    var navs = document.getElementById("nav").children;
    for(var i = 0;i<navs.length;i++){
        navs[i].classList.remove("active");
    }
    var nav = document.getElementById("nav-"+index);
    nav.classList.add("active");
}

function selectJob(){
		var selected = document.getElementById("select_job").value;
        fetch("./"+selected+".html") //ロード元URL
        .then(data => data.text())
        .then(html => document.getElementById("content").innerHTML = html)
}