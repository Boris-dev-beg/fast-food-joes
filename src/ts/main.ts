declare const AOS: any;

const ANIMATION = {
  boisson: "Boissons",
  burger: "Burgers",
  snack: "Accompagnements",
  grillade: "Grillades",
};
const animations = {
  [ANIMATION.boisson]: "fade-up",
  [ANIMATION.burger]: "zoom-in",
  [ANIMATION.snack]: "zoom-in-up",
  [ANIMATION.grillade]: "fade-up",
};

let Products: Product[] = [];

const fetchProducts = async () => {
  try {
    const response = await fetch("../data/data.json");

    if (!response.ok)
      throw new Error("An error occure while fetching data from data.json");

    const data = await response.json();
    Products = data.products;
    set_products_category("Burgers");
    console.log(Products);
  } catch (err) {
    console.error("Error:", err);
  }
};

fetchProducts();

console.log(Products);

function set_products_category(category: string) {
  const products_Category = Products.filter(
    (prod: Product) =>
      prod.category.toLocaleLowerCase() === category.toLocaleLowerCase(),
  );
  set_products(products_Category);
}
function set_products(products: ProductType) {
  const menu_container = document.getElementById(
    "menu-container",
  ) as HTMLElement;

  menu_container.innerHTML = "";
  products.forEach((product: Product, index: number) => {
    const formattedPrice = new Intl.NumberFormat("fr-FR").format(product.price);
    const duration = 500 * (index + 1);

    const delay = 100 * (index + 1);
    menu_container.innerHTML += `
      <div
        data-aos=${animations[product.category]}
        data-aos-delay=${delay >= 1000 ? 1000 : delay}
        data-aos-duration=${duration >= 1500 ? 1500 : duration}
        class="menu-card group"
      >
        <span class="menu-card-image">
          <img
            src="./assets/images/products${product.imageUrl}"
            alt="${product.name}"
            class="object-cover w-full h-full"
            loading="lazy"
          />
        </span>
        <div
          class="flex flex-col items-start w-full flex-nowrap h-full"
        >
          <span class="menu-card-text">
            <h2 class="menu-card-text-title">${product.name}</h2>
            <p class="menu-card-text-p">
              ${product.description}
            </p>
          </span>
          <h3 class="menu-card-price">${formattedPrice} FCFA</h3>
        </div>
      </div>`;
  });
}

function handlefilter() {
  const btns_filters = document.querySelectorAll<HTMLButtonElement>(
    "#btns-filter button",
  );

  btns_filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns_filters.forEach((elt) => elt.classList.remove("active"));
      btn.classList.add("active");
      console.log(Products, btn.value);
      set_products_category(btn.value);
    });
  });
}

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

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    offset: 50,
    easing: "ease-in-out",
  });

  try {
    responsive_menu();
    handlefilter();
  } catch (error) {
    console.error("Erreur :", error);
  }
});
