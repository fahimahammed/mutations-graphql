
exports.Catagory={
    products:({id}, {filter}, {products})=>{
      const catProducts = products.filter(product => product.catagoryId === id);
      let filteredCatProducts = catProducts;
      if(filter?.onSale === true){
        filteredCatProducts = filteredCatProducts.filter(product => {
            return product.onSale
        })
    }
    return filteredCatProducts
    }
  }