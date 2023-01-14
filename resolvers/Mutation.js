const { v4: uuid} = require("uuid");
exports.Mutation = {
    addCategory: (parent, {input}, {categories}) => {
        const {name} = input;
        const newCatagory  = {
            id: uuid(),
            name 
        }
        categories.push(newCatagory);
        return newCatagory;
    },

    addProduct: (parent, { input }, {products}) => {
        const {
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            catagoryId
        } = input;
        const newProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            catagoryId
        }
        products.push(newProduct);
        return newProduct;
    },
    addReview: (parent, {input}, {reviews})=>{
        const {
            date,
            title,
            comment,
            rating,
            productId
        } = input;
        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }

        reviews.push(newReview);
        return newReview;
    }
}