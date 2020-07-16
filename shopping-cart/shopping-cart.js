
import cart from '../data/cart.js';
import books from '../data/books-list.js';
import { findById, calcOrderTotal } from '../common/utils.js';
import { renderLineItems } from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

// go through the cart
for (let i = 0; i < cart.length; i++) {
    // for every item in the cart
    const cartItem = cart[i];
    // get the fruit data from the fruit spreadsheet that goes with this cart item
    const fruit = findById(books, cartItem.id);
    // make a table row for it
    const dom = renderLineItems(cartItem, fruit);

    // then put the table row on the tbody
    tbody.appendChild(dom);
}

// make a total row line that has all the cart items added up
const orderTotal = calcOrderTotal(cart, books);
orderTotalCell.textContent = toUSD(orderTotal);