const products = [
    {id: 1, title: 'Bags', price: 350, img: src="img/item1.png"},
    {id: 1, title: 'Dress', price: 750, img: src="img/item2.jpg"},
    {id: 1, title: 'Polo', price: 450, img: src="img/item3.png"},
    {id: 1, title: 'Shirt', price: 350, img: src="img/item4.png"},
    {id: 1, title: 'Jacket', price: 400, img: src="img/item5.png"},
    {id: 1, title: 'T-Shirt', price: 350, img: src="img/item6.png"},
];

const renderProduct = product => {
    return `<div class="box_card">
            <img class="box_card_img" src="${product.img}">
            <h3>${product.title}</h3>
            <p class="box_card_text_price">${product.price}</p>
            <button class="box_card_btn">Add to Cart</button>
             </div>`
};

const renderPage = list => {
    document.querySelector('.box').innerHTML =
        (list.map(product => renderProduct(product))).join(" ");
};

renderPage(products);