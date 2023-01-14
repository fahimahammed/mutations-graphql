const { reviews } = require("../db");

exports.Query= {
    hello: (parent, args, context) => "fahim",
    products: (parent, {filter}, {db})=>{
        let filteredProducts = db.products;
        if(filter){
            const {onSale, avgRating} = filter;
            if(onSale){
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale
                })
            }
            if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter(product => {
                    let sumRating = 0;
                    let numOfReviews = 0;
                    db.reviews.forEach(review => {
                        if(review.productId === product.id) {
                            sumRating += review.rating;
                            numOfReviews +=1;
                        }
                    });
                    const avgProductRating = sumRating/numOfReviews;
                    return avgProductRating >= avgRating
                    //console.log(avgProductRating, product.name)
                })
            }
        }
        return filteredProducts
    },
    product: (parent, {id: productId}, {db})=>{
        const product = db.products.find(product => product.id === productId);
        if(!product){
            return null;
        }
        return product;
    },
    categories: (parent, args, {db})=> {
        return db.categories;
    },
    category: (parent, {id: catId}, {db})=>{
        const singleCat = db.categories.find(cat => cat.id === catId);
        if(!singleCat) return null
        return singleCat;
    },
    
  }