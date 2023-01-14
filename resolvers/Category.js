
exports.Catagory={
    products:({id}, {filter}, {db})=>{
      const catProducts = db.products.filter(product => product.catagoryId === id);
      let filteredCatProducts = catProducts;
      if(filter?.onSale === true){
        filteredCatProducts = filteredCatProducts.filter(product => {
            return product.onSale
        })
    }
    return filteredCatProducts
    }
  }