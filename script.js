const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const currentYear = document.querySelector(".currentYear");
const scrollToTopBtn = document.querySelector(".Up");



function showMenuList() {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
}
function HideMenu() {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Optional: for smooth scrolling animation
    });
}

function showAndHideBtn() {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
// to show the menue list
menuBtn.addEventListener('click', showMenuList);
// to hide menu
navLinks.addEventListener('click', HideMenu);
// go to the beginging of page
scrollToTopBtn.addEventListener('click', scrollToTop)
// to show and hide the button Up throgh Scroll
window.addEventListener("scroll", showAndHideBtn);




// Set Current Year
const Year = new Date();
currentYear.textContent = Year.getFullYear();


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_img img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".content h2", {
    ...scrollRevealOption,
    delay: 500,
    origin: "left"
});

ScrollReveal().reveal(".content h1", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "top"

});

ScrollReveal().reveal(".content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 1700,
});


ScrollReveal().reveal(".head", {
    ...scrollRevealOption,
    delay: 300,
});

ScrollReveal().reveal(".content-card", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".img-card", {
    ...scrollRevealOption,
    delay: 500,
    origin: "left"
});

ScrollReveal().reveal(".services-content", {
    ...scrollRevealOption,
    delay: 500,
    origin: "left"
});

ScrollReveal().reveal(".services .card", {
    ...scrollRevealOption,
    delay: 300,
    origin: "top"
});

ScrollReveal().reveal(".descreption", {
    ...scrollRevealOption,
    delay: 200,
    origin: "right"
});
ScrollReveal().reveal(".enter-data", {
    ...scrollRevealOption,
    delay: 500,
    origin: "right"
});