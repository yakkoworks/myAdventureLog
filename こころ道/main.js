function init(){
    // 職業が増えたらここの数字を忘れずにいじろう
    var max = 6;
    for(var i = 1;i<=max;i++){
        fetch("./0"+i+".html") //ロード元URL
        .then(data => data.text())
        .then(html => document.getElementById("content").innerHTML += html)
    }
}

// function selectJob(){
// 		var selected = document.getElementById("select_job").value;
//         fetch("./"+selected+".html") //ロード元URL
//         .then(data => data.text())
//         .then(html => document.getElementById("content").innerHTML += html)
// }