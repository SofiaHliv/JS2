// const products = [
//     {id: 1, title: 'Bags', price: 350, img: src="img/item1.png"},
//     {id: 1, title: 'Dress', price: 750, img: src="img/item2.jpg"},
//     {id: 1, title: 'Polo', price: 450, img: src="img/item3.png"},
//     {id: 1, title: 'Shirt', price: 350, img: src="img/item4.png"},
//     {id: 1, title: 'Jacket', price: 400, img: src="img/item5.png"},
//     {id: 1, title: 'T-Shirt', price: 350, img: src="img/item6.png"},
// ];
//
// const renderProduct = product => {
//     return `<div class="box_card">
//             <img class="box_card_img" src="${product.img}">
//             <h3>${product.title}</h3>
//             <p class="box_card_text_price">${product.price}</p>
//             <button class="box_card_btn">Add to Cart</button>
//              </div>`
// };
//
// const renderPage = list => {
//     document.querySelector('.box').innerHTML =
//         (list.map(product => renderProduct(product))).join(" ");
// };
//
// renderPage(products);

//


class ProductList {
    constructor(container = '.box') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Bags', price: 350, img: "img/item1.png"},
            {id: 2, title: 'Dress', price: 750, img: "img/item2.jpg"},
            {id: 3, title: 'Polo', price: 450, img: "img/item3.png"},
            {id: 4, title: 'Shirt', price: 350, img: "img/item4.png"},
            {id: 5, title: 'Jacket', price: 400, img: "img/item5.png"},
            {id: 6, title: 'T-Shirt', price: 350, img: "img/item6.png"},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for( let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
    getSum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;

        })
        console.log(sum);
    }
}

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
        return `<div class="box_card">
             <img class="box_card_img" src="${this.img}">
            <h3>${this.title}</h3>
            <p class="box_card_text_price">${this.price}</p>
            <button class="box_card_btn">Add to Cart</button>
             </div>`
    }
}
let list = new ProductList();
list.getSum();

class Card {
    addProduct(){

    }
    removeProduct() {

    }
    changeProduct() {

    }
    render() {

    }
}

class ItemCard {
    render() {

    }

}
