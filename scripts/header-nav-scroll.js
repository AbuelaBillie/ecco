window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    const header_nav_bar = document.getElementById("header-nav-bar");
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
        header_nav_bar.classList.add("visible");
    } else {
        header_nav_bar.classList.remove("visible");
    }
});