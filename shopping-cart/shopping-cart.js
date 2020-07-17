
import books from '../data/books-list.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import { renderLineItems } from './render-line-item.js';
import { finalOrder } from '../common/utils.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('order-button');

const initializedEmptyCart = '[]';
const localStorageCart = localStorage.getItem('CART') || initializedEmptyCart;
const cart = JSON.parse(localStorageCart);

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
        alert(`Thanks for ordering! You should recieve ${finalOrder()}.`); 
        localStorage.removeItem('CART');
        window.location = '../';    
    });
}

// alert('Thanks for ordering: ' + JSON.stringify(cart, true, 2)); 