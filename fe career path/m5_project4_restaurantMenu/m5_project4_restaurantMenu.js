import { menuArray } from './m5_project4_restaurantMenu_data.js';

console.log(menuArray)

function getMenuHtml(menuArray) {
    let menuHtml = ``;
    menuArray.forEach(function(item){
        menuHtml += `
        <div class="item">
            <img src="${item.pic}" class="item-pic" alt="${item.name}">
            <div class="item-description">
                <p class="item-name">${item.name}</p>
                <p class="item-ingredients">${item.ingredients}</p>
                <p class="item-price">$${item.price}</p>
            </div>
            <button class="increment-btn" id="increment-btn">+</button>
        </div>
        <img src="./images/divider-gray.png" class="divider-gray" alt="divider-gray">
        `;
    })
    return menuHtml;
}

function render(){
    document.getElementById('menu').innerHTML = getMenuHtml(menuArray);
}

render();
