"use strict";
window.addEventListener("load", () => {
    responsive_menu();
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
}
// responsive_menu()
