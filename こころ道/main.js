// function selectJob(){
// 	var selected = document.getElementById("select_job").value;
// 	var iframe = document.getElementById("content");
// 	iframe.src = "./"+selected+".html";
// 	// alert(selected);
// }
function saveImage(){
	var node = document.getElementById("content");
	domtoimage.toPng(node)
	.then(function (dataUrl) {
		var link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}
function selectJob(){
		var selected = document.getElementById("select_job").value;
        fetch("./"+selected+".html") //ロード元URL
        .then(data => data.text())
        .then(html => document.getElementById("content").innerHTML = html) //ロード先ID指定
}