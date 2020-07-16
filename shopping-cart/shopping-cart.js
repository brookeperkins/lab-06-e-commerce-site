
// import cart from '../data/cart.js';
import books from '../data/books-list.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import { renderLineItems } from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('order-button');

const initializedEmptyCart = '[]';
const localStorageCart = localStorage.getItem('CART') || initializedEmptyCart;
const cart = JSON.parse(localStorageCart);
console.log(cart);

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const fruit = findById(books, cartItem.id);
    const dom = renderLineItems(cartItem, fruit);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, books);
orderTotalCell.textContent = `$${orderTotal.toFixed(2)}`;

if (cart.length === 0) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Thanks for ordering: ' + JSON.stringify(cart, true, 2)); 
        window.location = '../';    
    });
}
console.log(cart);