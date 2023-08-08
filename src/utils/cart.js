export const setCartToLS = (access_token) =>
  localStorage.setItem("Cart_token", access_token);

export const getCartFromLS = () => localStorage.getItem("Cart_token") || "";

export const clearCartFromLS = () => localStorage.removeItem("Cart_token");
