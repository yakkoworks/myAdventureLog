function onload(){
	var exchangeKokoroList = document.getElementById("exchangeKokoroList");
	var arr = [];
	localforage.iterate(function(value, key, i) {
		if(key.match(/exchangeKokoro_/)){
			arr.push(value);
		}
	})
	.then(function() {
		const comp = (a, b) => [
			a.color > b.color,
			b.cost > a.cost
		].reduce((x, y) => x << 1 | y);
		arr.sort((a, b) => comp(a, b) - comp(b, a));
		arr.forEach(function(value){
			exchangeKokoroList.insertAdjacentHTML("beforeend",'<tr class="listitem"><td class="color color'+value.color+'"><td class="cost">'+value.cost+'</td></td><td class="name">'+value.name+'</td></tr>');
		})
	}).catch(function(err) {
		console.log(err);
	});
}
function addExchangeKokoroList(){
	var kokoroId = "exchangeKokoro_"+createFileName();
	var kokoroData = {
		color:document.getElementById("addList-color").value,
		name: document.getElementById("addList-name").value,
		cost: document.getElementById("addList-cost").value
	}
	localforage.setItem(kokoroId,kokoroData)
	.then(function(value) {
		console.log(value.name);
	}).catch(function(err) {
		console.log(err);
	});
	window.location.reload();
}