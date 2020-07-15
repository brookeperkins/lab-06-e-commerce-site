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

// export function calOrderTotal(cart, books) {
//     let orderTotal = 0;

//     for (let i = 0; i < cart.length; i++) {
//         const 
//     }
// }