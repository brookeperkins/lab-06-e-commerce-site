  
import books from '../data/books-list.js';
import { findById } from '../common/utils.js';

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