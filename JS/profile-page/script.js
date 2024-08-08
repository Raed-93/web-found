var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    if (element) {
        element.remove();
        requestSpan.innerText = parseInt(requestSpan.innerText) - 1;
        connectionSpan.innerText = parseInt(connectionSpan.innerText) + 1;
    }
}

function ignore(id) {
    var element = document.querySelector(id);
    if (element) {
        element.remove();
        requestSpan.innerText = parseInt(requestSpan.innerText) - 1;
    }
}


function edit() {
    username.innerText = "Marisa G";
}
