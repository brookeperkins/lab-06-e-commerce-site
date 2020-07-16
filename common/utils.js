export function findById(someArray, someId) {
    let matchItem = null;

    for (let i = 0; i < someArray.length; i++) {
        if (someId === someArray[i].id) {
            matchItem = someArray[i];
        }
    }
    return matchItem;
}

export function calcLineTotal(quantity, price) {
    const total = quantity * price;
    return Math.round(total * 100) / 100;
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal(cart, books) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const bookNoob = findById(books, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, bookNoob.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}

export function getCart() {
    const json = localStorage.getItem('CART');
    let myCart;
    if (json) {
        myCart = JSON.parse(json);
    } else {
        myCart = [];
    }
    return myCart;
}