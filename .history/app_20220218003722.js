import { menu } from "./data.js";
const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    
    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
 
const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(filterBtn => {
   filterBtn.addEventListener("click", () =>{
     const value = filterBtn.getAttribute("data-id");
     if(value === "all"){
       displayMenuItems(menu);
       return;
     }
     const filterArr = menu.filter(item => item.category ===value);

     let card = filterArr.map(function(item){
       return  `<article class="menu-item">
       <img src=${item.img} alt=${item.title} class="photo" />
       <div class="item-info">
         <header>
           <h4>${item.title}</h4>
           <h4 class="price">$${item.price}</h4>
         </header>
         <p class="item-text">
           ${item.desc}
         </p>
       </div>
     </article>` 
    }).join("");
      
     sectionCenter.innerHTML = card;
   })
});
function render(){
let searchText = "";
let search = document.querySelector("input");
search.addEventListener("keyup", (e)=>{
  searchText = e.target.value;
  let searchArr = menu.filter(item=>{
    return item.desc.indexOf(searchText) !==-1;
  })
  displayMenuItems(searchArr);
});
}
render();

let = id;
function refresh(){
  if(id !== undefined){
    clearTimeout(id);
  }
  id = setTimeout(()=>{
     render();
  },3000);
}
/*//<input type="text" placeholder="search">
    //<div id="root"></div>
    let list = [];
    let searchText = "";

    const input = document.querySelector("input");
    input.addEventListener("keyup", (e) => {
        searchText = e.target.value;
        refresh();
    });
    let id;

    function refresh() {
        if (id !== undefined) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            render();
        }, 1000);
    }
    const root = document.querySelector("#root");
    function render() {
        root.innerHTML = "";
        list.filter((name) => {
                return name.indexOf(searchText) !== -1;
            })
            .map(name => {
                const div = document.createElement("div");
                div.innerHTML = name;
                return div;
            }).forEach(element => {
                root.appendChild(element);
            });
    }
    render();
















Send a message to random





*/