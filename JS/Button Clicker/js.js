function hide(element){
    element.remove();
}
function loading(load){
    alert("Ninja was liked.");
}

function toggleState(element) {
    if (element.innerText === "On") {
        element.innerText = "Off";
    } else {
        element.innerText = "On";
    }
}