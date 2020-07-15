// for loop goes here //make it a function in order to use again? - 7/14
import books from '../data/books-list.js';
import { renderBooks } from './render-books.js';

const list = document.getElementById('books');

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const dom = renderBooks(book);
    list.appendChild(dom);
}
