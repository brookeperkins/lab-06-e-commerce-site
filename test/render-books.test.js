import { renderBooks } from '../products/render-books.js';

const test = QUnit.test;

QUnit.module('Render Books');

test('renders a book', assert => {

    const book = {
        code: 'book',
        name: 'Beloved',
        image: 'book1.jpg',
        description: 'Classic novel by Toni Morrison about life after slavery, with ghosts!',
        category: 'novel',
        price: 15.00,
        cost: 7.50
    };
    const expected = '<li class="novel" title="Classic novel by Toni Morrison about life after slavery, with ghosts!"><h3>Beloved</h3><img src="../assets/book1.jpg" alt="Beloved cover"><p class="price">$15.00<button value="book">Add</button></p></li>';
    
    const dom = renderBooks(book);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});
