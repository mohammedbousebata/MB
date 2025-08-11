

function showMenu(){
    const menu = document.querySelector(".navigation");
    const closeBtn = document.querySelector(".close-menu");
    const menuBtn = document.querySelector(".menu-btn");
    closeBtn.style.opacity = "1"
    closeBtn.style.display = "flex";
    menuBtn.style.display = "none";
    menuBtn.style.opacity = "0"
    menu.style.display = "flex";
    menu.style.opacity = "1"
}

function hideMenu(){
    const menu = document.querySelector(".navigation");
    const closeBtn = document.querySelector(".close-menu");
    const menuBtn = document.querySelector(".menu-btn");
    closeBtn.style.opacity = "0"
    closeBtn.style.display = "none";
    menuBtn.style.display = "flex";
    menuBtn.style.opacity = "1"
    menu.style.display = "none";
    menu.style.opacity = "0";
}