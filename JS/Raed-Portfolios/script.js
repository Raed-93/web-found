document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", function() {
        // Toggle between dark and light mode
        if (document.documentElement.classList.contains("dark-mode")) {
            // If the document has the class "dark-mode"
            // Change the text to "Switch to dark mode"
            // darkModeToggle.innerText = "Switch to dark mode";
            // Remove the "dark-mode" class from the document
            document.documentElement.classList.remove("dark-mode");
        } else {
            // If the document doesn't have the class "dark-mode"
            // Change the text to "Switch to light mode"
            // darkModeToggle.innerText = "Switch to light mode";
            // Add the "dark-mode" class to the document
            document.documentElement.classList.add("dark-mode");
        }
    });
});
