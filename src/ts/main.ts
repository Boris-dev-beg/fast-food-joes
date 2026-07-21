window.addEventListener("load", () => {
  responsive_menu();
});

function responsive_menu() {
  const btn_close = document.getElementById("btn-close") as HTMLButtonElement;
  const btn_open = document.getElementById("btn-open") as HTMLButtonElement;
  const menu = document.getElementById("responsive-menu") as HTMLElement;

  btn_close.addEventListener("click", () => Close());
  btn_open.addEventListener("click", () => Open());

  const Close = () => {
    menu?.classList.add("-translate-x-full");
    menu?.classList.remove("translate-x-0");
  };
  const Open = () => {
    menu?.classList.add("translate-x-0");
    menu?.classList.remove("-translate-x-full");
  };

  const menuLinks = document.querySelectorAll("nav a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const currRef = link.getAttribute("href");
      menuLinks.forEach((navLink) => {
        const otherRef = navLink.getAttribute("href");
        navLink.classList.remove("active");

        if (currRef === otherRef) navLink.classList.add("active");
      });
      link.classList.add("active");
      Close();
    });
  });
}
