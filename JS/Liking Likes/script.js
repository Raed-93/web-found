var count = 3; 
var element = document.querySelector("#Like");

function add() {
    count++;
    element.innerText = count + " Like(s)";
    console.log(count);
}

var i = 9;
var incres = document.querySelector("#disLike");

function sub() {
    i--;
    incres.innerText = i + " Like(s)";
    console.log(i);
}
