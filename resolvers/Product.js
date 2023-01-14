//const { categories} = require("../db");
exports.Product={
    category:({catagoryId}, args, {categories}) =>{
        return categories.find(cat => cat.id === catagoryId);
    },
    reviews:({id}, args, {reviews}) => {
        return reviews.filter(review => review.productId === id);
    }
  }