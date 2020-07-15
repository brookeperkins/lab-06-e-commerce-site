  
import books from '../data/books-list.js';
import { findById } from '../common/utils.js';

const test = QUnit.test;
QUnit.module('Utilities');

test('find product by id', assert => {
    
    const id = 'book1';
    const expected = 'Beloved';

    const foundBook = findById(books, id);

    assert.ok(foundBook);
    assert.equal(foundBook.name, expected);
});
