import { menuArray } from './m5_project4_restaurantMenu_data.js';

const modal = document.getElementById('modal');
const order = document.getElementById('order');
const orderHeading = document.getElementById('order-heading');
const orderItemsList = document.getElementById('order-items-list');
const orderTotal = document.getElementById('order-total');
const thanks = document.getElementById('thanks');
const paymentForm = document.getElementById('payment-form');

// listen for clicks

document.addEventListener('click', function(e){
    if (e.target.id === 'complete-btn') {
        modal.style.display = 'block';
    }
    else if (e.target.dataset.increment) {
        handleIncrementBtn(e.target.dataset.increment);
    }
    // else if (e.target.dataset.remove) {
    //     handleRemoveBtn(e.target.dataset.remove);
    // }
})

// handle btns

let orderArray = [];

function handleIncrementBtn(itemUUID){
    orderHeading.style.display = 'block';

    // render order list

    const targetItemObj = menuArray.filter(item => item.uuid === itemUUID)[0];
    orderArray.push(targetItemObj);
    
    let counts = orderArray.reduce((map, targetItemObj) => {map[targetItemObj.name] = (map[targetItemObj.name] || 0)+1; return map}, {} );  
    let orders = [];
    
    orderArray.forEach(function(order){
        let item = `
        <div class="order-container">
            <div class="item-name-btn">
                <p class="item-name">${order.name} +${counts[order.name]}</p>
                <!-- <button class="remove-btn" id="remove-btn" data-remove="${order.uuid}">remove</button> -->
            </div>
            <p class="item-price">$${order.price*counts[order.name]}</p>
        </div>
        `;
        
        if(!orders.includes(item)){
            orders.push(item);
        }
    });
    orderItemsList.innerHTML = orders.join('');

    // render total list

    let totalSum = 0;

    for (let i = 0; i < orderArray.length; i++) {
        totalSum += orderArray[i].price;
    }

    orderTotal.innerHTML = `
    <img src="./images/divider-black.png" class="divider-black" alt="divider-black">
    <div class="order-container total">
        <p class="total-heading">Total price:</p>
        <p class="total-price">$${totalSum}</p>
    </div>
    <button class="complete-btn" id="complete-btn">Complete order</button>
    `;
}

// submit form

paymentForm.addEventListener('submit', function(e){
    e.preventDefault();

    const paymentFormData = new FormData(paymentForm);
    const name = paymentFormData.get('userName');

    modal.style.display = 'none';
    order.style.display = 'none';
    thanks.style.display = 'flex';

    thanks.innerHTML = `
    <p>Thanks, <span id="user-name">${name}</span>! Your order is on its way! :)</p>
    `;
})

// render the menu

function getMenuHtml(menuArray) {
    let menuHtml = ``;

    menuArray.forEach(function(item){
        menuHtml += `
        <div class="item">
            <img src="${item.pic}" class="item-pic" alt="${item.name}">
            <div class="item-description">
                <p class="item-name">${item.name}</p>
                <p class="item-ingredients">${item.ingredients.join(', ')}</p>
                <p class="item-price">$${item.price}</p>
            </div>
            <button class="increment-btn" 
            id="increment-btn"
            data-increment="${item.uuid}">+</button>
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
