// preloader
var loader = document.querySelector("#preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

// navbar
const navView = document.querySelector("#nav-view");
let navList = document.querySelector(".nav-list");
navView.onclick = function() {
    navList.classList.toggle("slide");
}
if (window.innerWidth <= 1150) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", event => {
            dropdown.classList.toggle("open");
        });
    });
}



// const dropdownBtns = document.querySelectorAll(".dropdown-btn");
// dropdownBtns.forEach(btn => {
//     btn.addEventListener("click", event => {
//         const dropdownList = document.querySelectorAll(".dropdown-list");
//         dropdownList.classList.toggle("open");
//         // dropdownLists.forEach(list => {
//         // });
//         console.log("open");
//     });
// });