function newCart() {
    let cart = [];

    return function (item) {
        cart.push(item);

        console.log(cart);
    }
}

let cart1 = newCart();
cart1("Laptop");
cart1("Jacket");
cart1("Mobile");

let cart2 = newCart();
cart2("Soap");
cart2("Pen");
cart2("Book");

let cart3 = newCart();
cart3("milk");
cart3("butter");
cart3("bread");
