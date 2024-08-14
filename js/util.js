function showModalDialog(id){
    document.getElementById(id).showModal();
}
function closeModalDialog(id){
    document.getElementById(id).close();
}

function createFileName(){
    var date = formatDate();
    var time = formatTime();
    return date+'-'+time;
}
// 「yyyymmdd」形式の日付文字列に変換する関数
function formatDate() {
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    
    const yyyy = y.toString();
    const mm = ("00" + m).slice(-2);
    const dd = ("00" + d).slice(-2);
    
    return yyyy + mm + dd;
}

// 「hhmmss」形式の時刻文字列に変換する関数
function formatTime(){
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    
    const hh = ("00" + h).slice(-2);
    const mm = ("00" + m).slice(-2);
    const ss = ("00" + s).slice(-2);
    return hh + mm + ss;
}

// 10文字のランダム文字列を生成
function createRandomStrings(){
    return Math.random().toString(26).slice(-11);
}