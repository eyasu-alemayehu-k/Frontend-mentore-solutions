
const menu_item_list = document.querySelector(".menu-item-list");
const menu_items = document.querySelector(".menu-items");

function hideMenu() {
    menu_item_list.classList.toggle("hidden");
    menu_items.classList.toggle("hide-menu");
}

const menu_open = document.querySelector(".menu-open").addEventListener("click",()=>{
    hideMenu();
})

const menu_close = document.querySelector(".menu-close").addEventListener("click",()=>{
    hideMenu();
})

