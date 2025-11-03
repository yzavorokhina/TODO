
class Product{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

// let cart = [];

/* получили строку в формате JSON и из него восстановили массив объектов */
let storageCart = JSON.parse(window.localStorage.getItem('cart'));
let cart = storageCart ? storageCart : [];

console.log(storageCart);

const bread = new Product(1, 'Хлеб');
const tea = new Product(2, 'Чёрный чай');

// cart[0] = bread;
// cart[1] = tea;

cart.push(bread);
cart.push(tea);

console.log(cart);

let jsonCart = JSON.stringify(cart);

window.localStorage.setItem('cart', jsonCart);
