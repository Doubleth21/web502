// enum Rate {
//     low = 'thap',
//     medium = 'trung binh',
//     hight = 'cao'
// }

// type Product = {
//     name: string;
//     price: number;
//     sale: boolean;
//     rate: Rate;
//     description?: string;
    
// }

// const product: Product = {
//     name: 'ao thun',
//     price: 19000,
//     sale: true,
//     rate: Rate.medium
// }

// let listProduct: Product[] = [
//     {
//         name: 'quan jean',
//         price: 1000,
//         sale: true,
//         rate: Rate.medium
//     },
//     {
//         name: 'ao thun',
//         price: 2000,
//         sale: false,
//         rate: Rate.hight
//     },
//     {
//         name: 'giay the thao',
//         price: 3000,
//         sale: true,
//         rate: Rate.hight
//     },
//     {
//         name: 'mu luoi trai',
//         price: 4000,
//         sale: false,
//         rate: Rate.low
//     },
//     {
//         name: 'balo',
//         price: 5000,
//         sale: true,
//         rate: Rate.medium
//     },
// ];

// listProduct = listProduct.map(p => {
//     p.description = p.price > 3 ? 'tot' : 'binh thuong';
//     return p;
// });

// listProduct.forEach(function showProduct(product) {
//     console.log(`Name: ${product.name}`);
//     console.log(`Price: ${product.price}`);
//     console.log(`Sale: ${product.sale ? 'Co' : 'Khong'}`);
//     console.log(`Rate: ${product.rate}`);
//     console.log(`Description: ${product.description}`);
// });

// const getTotalPrice = listProduct.reduce((total, p) => total + p.price, 0);
// console.log(`Total Price: ${getTotalPrice}`);


// function filterSaleProducts(products: Product[]): Product[] {
//     return products.filter(p => 
//         p.sale == true && (p.rate === Rate.hight || p.rate === Rate.medium)
//     );
// }
// const saleProducts = filterSaleProducts(listProduct);
// console.log('Sale Products:');



// console.log(listProduct);
// console.log(product);
