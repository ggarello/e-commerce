import products from './products.json'

const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (idProduct) => {
    return products.find(p => p.id === idProduct);
};


export default getProducts;