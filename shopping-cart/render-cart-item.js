export function renderCartItems(cartItem, book) {
    const tr = document.createElement('tr');

    const tdBookName = document.createElement('td');
    tdBookName.textContent = book.name;
    tdBookName.classList.add('align-left');

    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = `$${book.price.toFixed(2)}`;

    const tdTotal = document.createElement('td');
    tdTotal.classList.add('cart-item-total');
    const totalPrice = (book.price * cartItem.quantity);
    tdTotal.textContent = `$${totalPrice.toFixed(2)}`;

    tr.appendChild(tdBookName);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdPrice);
    tr.appendChild(tdTotal);

    return tr;
}