/* fetch data to dropdown list */

fetch('https://restcountries.com/v3.1/all').then(function (result) {
    return result.json();
}).then(function (result) {
    displayData(result)
})
const formSelect = document.querySelector(".menu");
function displayData(result) {
    let output = "";
    for (let index = 0; index < 6; index++) {
        output += `<li class="dropdown-item">${result[index].cca2} <img src="${result[index].flags.svg}" alt="flag-pic"></li>`;
    }
    formSelect.innerHTML = output;
}

/* fetch data to slider */

fetch('https://dummyjson.com/products').then(function (res) {
    return res.json();
}).then(function (res) {
    getData(res.products)
})

const Card = document.querySelectorAll(".cardapi");

function getData(res) {
    let output = "";
    for (let index = 0; index < 6; index++) {
        output = `<div class="image-wrapper">
        <img src="${res[index].images[0]}" alt="mobile-pic"></img></div> 
        <div class="card-body cardbodyapi">
        <h4 class="card-title pb-2 text-w">${res[index].title}</h4>
        <div class="ratting">
        <svg class="fa-solid fa-star p-1 color-d"></svg>
        <svg class="fa-solid fa-star p-1 color-d"></svg>
        <svg class="fa-solid fa-star p-1 color-d"></svg>
        <svg class="fa-solid fa-star p-1 color-d"></svg>
        <svg class="fa-solid fa-star-half-stroke p-1"></svg>
        </div>
        <p class="card-text pt-2 pb-2 color-text"> $${res[index].price}</p>
        </div>`;
        Card[index].innerHTML = output;
    }
}
