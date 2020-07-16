import { renderLineItems } from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Items');

test('renders a line item', assert => {
    // arrange
    const lineItem = {
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
    const expected = '<tr><td class="align-left">Heavy</td><td>4</td><td>$20.00</td><td class="line-item-total">$80.00</td></tr>';

    // act
    const dom = renderLineItems(lineItem, book);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});