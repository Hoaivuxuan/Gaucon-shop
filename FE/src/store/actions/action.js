export const addToCart = (Cart) => {
  return {
    type: "ADD_TO_CART",
    payload: Cart,
  };
};

export const removeFromCart = (Cart) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: Cart,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
