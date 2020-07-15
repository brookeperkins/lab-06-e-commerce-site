export function findById(someArray, someId) {
    let matchItem = null;

    for (let i = 0; i < someArray.length; i++) {
        if (someId === someArray[i].id) {
            matchItem = someArray[i];
        }
    }
    return matchItem;
}

