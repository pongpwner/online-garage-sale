export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExists = cartItems.find((item) => item.id === itemToAdd.id);
  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove);
};

export const changeQuantity = (cartItems, itemId, input) => {
  return cartItems.map((cartItem) => {
    if (itemId === cartItem.id) {
      if (cartItem.quantity + input < 1) {
        return { ...cartItem, quantity: 1 };
      }
      return { ...cartItem, quantity: cartItem.quantity + input };
    }
    return cartItem;
  });
};
