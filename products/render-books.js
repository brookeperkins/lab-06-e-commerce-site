import { getCart, findById } from '../common/utils.js';

export function renderBooks(book) {
    const li = document.createElement('li');

    const category = book.category;
    li.classList.add(category);
    const title = book.description;
    li.title = title;

    const h3 = document.createElement('h3');
    h3.textContent = book.name;
    li.append(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + book.image;
    img.alt = book.name + ' cover';
    li.append(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${book.price.toFixed(2)}`;

    const button = document.createElement('button');
    button.value = book.code;
    button.textContent = 'Add';
    button.addEventListener('click', () => {
        let cart = getCart();

        const cartItems = findById(cart, book.id);
        if (!cartItems) {
            const initializedCartItem = {
                id: book.id,
                quantity: 1
            };
            cart.push(initializedCartItem);
        } 
        else {
            cartItems.quantity++;
        }

        const stringCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringCart);
        alert('One copy of ' + book.name + ' added to cart');
    });

    p.append(button);

    li.append(p);

    return li;
}
