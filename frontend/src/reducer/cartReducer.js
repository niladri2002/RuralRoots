const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id,stock, amount, product } = action.payload;
    //   console.log(
    //     "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //     product
    //   );
  
      let cartProduct;
  
      cartProduct = {
        id: id +amount,
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
        max: stock,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
  
    return state;
  };
  
  export default cartReducer;