const { v4: uuid} = require("uuid");
exports.Mutation = {
    addCategory: (parent, {input}, {db}) => {
        const {name} = input;
        const newCatagory  = {
            id: uuid(),
            name 
        }
        db.categories.push(newCatagory);
        return newCatagory;
    },

    addProduct: (parent, { input }, {db}) => {
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
        db.products.push(newProduct);
        return newProduct;
    },
    addReview: (parent, {input}, {db})=>{
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

        db.reviews.push(newReview);
        return newReview;
    },
    deleteCategory: (parent, {id}, {db}) => {
        db.categories = db.categories.filter(category => category.id !== id);
        db.products = db.products.map(product => {
            if(product.catagoryId === id) return {
                ...product,
                catagoryId: null
            }
            else return product;
        })
        return true;
    },
    deleteProduct: (parent, {id}, {db})=>{
        db.products = db.products.filter(product => product.id !== id);
        db.reviews = db.reviews.filter(review => review.productId !== id);
        return true;
    },
    deleteReview: (parent, {id}, {db})=>{
        db.reviews = db.reviews.filter(review => review.id !== id);
        // db.products = db.
        return true;
    },
    updateCategory: (parent, {id, input}, {db})=>{
        const index = db.categories.findIndex(category => category.id === id);
        if(index === -1) return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input
        }
        console.log(index);
        return db.categories[index];
    },
    updateProduct: (parent, {id, input}, {db})=>{
        const index = db.products.findIndex(product => product.id === id);
        if(index === -1) return null;
        db.products[index] = {
            ...db.products[index],
            ...input
        }
        console.log(index);
        return db.products[index];
    },
    updateReview: (parent, {id, input}, {db})=>{
        const index = db.reviews.findIndex(review => review.id === id);
        if(index === -1) return null;
        db.reviews[index] = {
            ...db.reviews[index],
            ...input
        }
        console.log(index);
        return db.reviews[index];
    }
}