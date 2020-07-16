  
import books from '../data/books-list.js';
import { findById } from '../common/utils.js';
import { calcLineTotal, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;
QUnit.module('Utilities');

test('find product by id', assert => {

    const array = books;
    const id = 'book1';
    const expected = 'Beloved';
    const foundBook = findById(array, id);

    assert.equal(foundBook.name, expected);
});

test('find product by id returns null if not found', assert => {
    const id = 'not found';
    const expected = null;

    const foundBook = findById(books, id);

    assert.equal(foundBook, expected);
});

test('calculate line total', assert => {
    const quantity = 2;
    const price = 10.00;
    const expected = 20.00;

    const total = calcLineTotal(quantity, price);

    assert.equal(total, expected);
});

test('calculate order total', (assert) => {
    // arrange
    const expected = 22.30;

    // act
    const orderTotal = calcOrderTotal(cart, books);

    // assert
    assert.equal(orderTotal, expected);
});
