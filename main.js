document.addEventListener("DOMContentLoaded", () => {
    const stickyHeader = document.getElementById("stickyHeader");
    const scrollThreshold = 100; // Soglia in pixel

    window.addEventListener("scroll", () => {
        if (window.scrollY > scrollThreshold) {
            stickyHeader.classList.add("visible");
        } else {
            stickyHeader.classList.remove("visible");
        }
    });
});
