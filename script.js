document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");
    const sweep = document.querySelector(".gold-sweep");

    // 1. Wait for 2 seconds (simulating loading/sketching)
    setTimeout(() => {
        // Fade out loader
        loader.style.opacity = "0";
        
        // Prepare main content
        mainContent.classList.remove("hidden");
        mainContent.style.opacity = "1";

        setTimeout(() => {
            loader.style.display = "none";
            // Trigger internal animations
            document.body.classList.add("show-content");
            
            // Start the gold shimmer sweep
            sweep.classList.add("animate-sweep");
        }, 1000);
        
    }, 2500); 
});