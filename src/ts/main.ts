window.addEventListener("load",()=>{
    responsive_menu()
})

function responsive_menu(){
    const btn_close = document.getElementById("btn-close") as HTMLButtonElement
    const btn_open = document.getElementById("btn-open") as HTMLButtonElement
    const menu = document.getElementById("responsive-menu") as HTMLElement

    btn_close.addEventListener("click", () => Close())
    btn_open.addEventListener("click", () => Open())

 const Close = () => {
    menu?.classList.add("-translate-x-full")
    menu?.classList.remove("translate-x-0")
 }   
 const Open = () => {
    menu?.classList.add("translate-x-0")
    menu?.classList.remove("-translate-x-full")
 }   
}

// responsive_menu()