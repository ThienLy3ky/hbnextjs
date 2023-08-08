export const setCartToLS = (access_token) =>
  localStorage.setItem("Cart_token", access_token);

export const getCartFromLS = () => {
  try {
    localStorage.getItem("Cart_token") || "";
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const clearCartFromLS = () => localStorage.removeItem("Cart_token");
