import { renderCartItems } from '../shopping-cart/render-cart-item.js';

const test = QUnit.test;

QUnit.module('Render Cart Items');

test('renders a line item', assert => {
    // arrange
    const cartItem = {
        id: 'book4',
        quantity: 4
    };

    // books
    const book = {
        id: 'book4',
        name: 'Heavy',
        image: 'book4.png',
        description: 'Moving autobiography about racism and the body by Kiese Laymon.',
        category: 'autobiography',
        price: 20.00,
        cost: 15.00
    };
    const expected = '<tr><td class="align-left">Heavy</td><td>4</td><td>$20.00</td><td class="cart-item-total">$80.00</td></tr>';

    // act
    const dom = renderCartItems(cartItem, book);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});