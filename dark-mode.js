 
    document.addEventListener("DOMContentLoaded", function () {

        const btn = document.getElementById("theme-toggle");
        
        const sunIcon = document.getElementById("sun-icon");
        const moonIcon = document.getElementById("moon-icon");

        btn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });

        btn.addEventListener("click", () => {
            if (moonIcon.style.display === "none") {
                
                sunIcon.style.display = "none";
                moonIcon.style.display = "inline";

            } else {
                
                moonIcon.style.display = "none";
                sunIcon.style.display = "inline";
            }
        });
    });