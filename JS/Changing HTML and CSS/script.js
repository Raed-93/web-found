var petImg = document.querySelector("#pet-img");
var h1 = document.querySelector("h1");


    
function pickCat(element) {
    petImg.src = "FELV-cat.jpg";
    h1.innerText = "Cat Img"  
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}

function pickDog(element) {

    petImg.src = "KOA_Nassau_2697x1517.jpg";  
    h1.innerText = "Dog Img";

    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to dark mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to light mode";
        element.classList.add("dark-mode");
    }

}

document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", function() {
        // تبديل وضع الظلام والنور
        if (document.body.classList.contains("dark-mode")) {
            // إذا كان الجسم يحتوي على الفئة "dark-mode"
            // قم بتغيير النص إلى "Switch to dark mode"
            darkModeToggle.innerText = "Switch to dark mode";
            // إزالة الفئة "dark-mode" من الجسم
            document.body.classList.remove("dark-mode");
        } else {
            // إذا كان الجسم لا يحتوي على الفئة "dark-mode"
            // قم بتغيير النص إلى "Switch to light mode"
            darkModeToggle.innerText = "Switch to light mode";
            // إضافة الفئة "dark-mode" إلى الجسم
            document.body.classList.add("dark-mode");
        }
    });
});





