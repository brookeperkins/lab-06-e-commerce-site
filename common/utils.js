export function findById(books, id) {

    for (let i = 0; i < books.length; i++) {
        const item = books[i];

        if (item.id === books[i].id) {
            return item;
        }
    }
    return null;
}
