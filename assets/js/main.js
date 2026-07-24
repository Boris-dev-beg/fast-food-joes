"use strict";
// import AOS from "aos";
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        offset: 50,
        easing: "ease-in-out",
    });
    try {
        responsive_menu();
    }
    catch (error) {
        console.error("Erreur dans responsive_menu :", error);
    }
});
function responsive_menu() {
    const btn_close = document.getElementById("btn-close");
    const btn_open = document.getElementById("btn-open");
    const menu = document.getElementById("responsive-menu");
    btn_close.addEventListener("click", () => Close());
    btn_open.addEventListener("click", () => Open());
    const Close = () => {
        menu === null || menu === void 0 ? void 0 : menu.classList.add("-translate-x-full");
        menu === null || menu === void 0 ? void 0 : menu.classList.remove("translate-x-0");
    };
    const Open = () => {
        menu === null || menu === void 0 ? void 0 : menu.classList.add("translate-x-0");
        menu === null || menu === void 0 ? void 0 : menu.classList.remove("-translate-x-full");
    };
    const menuLinks = document.querySelectorAll("nav a");
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const currRef = link.getAttribute("href");
            menuLinks.forEach((navLink) => {
                const otherRef = navLink.getAttribute("href");
                navLink.classList.remove("active");
                if (currRef === otherRef)
                    navLink.classList.add("active");
            });
            link.classList.add("active");
            Close();
        });
    });
}
