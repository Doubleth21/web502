var Rate;
(function (Rate) {
    Rate["low"] = "thap";
    Rate["medium"] = "trung binh";
    Rate["hight"] = "cao";
})(Rate || (Rate = {}));
var product = {
    name: 'ao thun',
    price: 19000,
    sale: true,
    rate: Rate.medium
};
var listProduct = [
    {
        name: 'quan jean',
        price: 1000,
        sale: true,
        rate: Rate.medium
    },
    {
        name: 'ao thun',
        price: 2000,
        sale: false,
        rate: Rate.hight
    },
    {
        name: 'giay the thao',
        price: 3000,
        sale: true,
        rate: Rate.hight
    },
    {
        name: 'mu luoi trai',
        price: 4000,
        sale: false,
        rate: Rate.low
    },
    {
        name: 'balo',
        price: 5000,
        sale: true,
        rate: Rate.medium
    },
];
listProduct = listProduct.map(function (p) {
    p.description = p.price > 3 ? 'tot' : 'binh thuong';
    return p;
});
listProduct.forEach(function showProduct(product) {
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Sale: ".concat(product.sale ? 'Co' : 'Khong'));
    console.log("Rate: ".concat(product.rate));
    console.log("Description: ".concat(product.description));
});
var getTotalPrice = listProduct.reduce(function (total, p) { return total + p.price; }, 0);
console.log("Total Price: ".concat(getTotalPrice));
function filterSaleProducts(products) {
    return products.filter(function (p) { return p.sale
        == true && (p.price >= 1000 && p.price <= 3000); });
}
var saleProducts = filterSaleProducts(listProduct);
console.log('Sale Products:');
console.log(listProduct);
console.log(product);
