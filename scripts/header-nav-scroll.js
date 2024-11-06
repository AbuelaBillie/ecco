window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    const header_nav_bar = document.getElementById("header-nav-bar");
    const headerHeight = header.offsetHeight;
    const btn_menu = document.getElementById("header-nav-bar-menu");
    const submenu = document.getElementById("header-nav-bar-submenu");
    const btn_lupa = document.getElementById("header-nav-bar-lupa");
    const submenu_lupa = document.getElementById("header-nav-bar-submenu-lupa");
    
    if (window.scrollY > headerHeight) {
        header_nav_bar.classList.add("visible");
    } else {
        header_nav_bar.classList.remove("visible");
        submenu.style.display = "none"
        submenu_lupa.style.display = "none"
    }

    btn_menu.addEventListener("click", ()=>{
        if (submenu.style.display === "block") {
            submenu.style.display = "none"
        }else{
            submenu_lupa.style.display = "none"
            submenu.style.display = "block"
        }
    })

    btn_lupa.addEventListener("click", ()=>{
        if (submenu_lupa.style.display === "block") {
            submenu_lupa.style.display = "none"
        }else{
            submenu.style.display = "none"
            submenu_lupa.style.display = "block"
        }
    })

});