var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}

var color = document.querySelectorAll(".colors");
    
function applyColor(element){
    for(var i=0; i<colors.length; i++) {
        color[i].style.color = element.value;
    }
}
