//const { categories} = require("../db");
exports.Product={
    category:({catagoryId}, args, {db}) =>{
        return db.categories.find(cat => cat.id === catagoryId);
    },
    reviews:({id}, args, {db}) => {
        return db.reviews.filter(review => review.productId === id);
    }
  }