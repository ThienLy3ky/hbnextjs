import { setCartToLS, getCartFromLS } from "./cart";
export const addCart = (productAdd) => {
  if (!productAdd) return false;
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  let isProduct = false;
  if (products && products.length > 0) {
    products?.find((product, i) => {
      if (product.id === productAdd.id) {
        products[i].name = productAdd?.name;
        products[i].code = productAdd?.code;
        products[i].image = productAdd?.image;
        products[i].price = productAdd?.price;
        products[i].quanlity++;
        return (isProduct = true);
      }
    });
    if (!isProduct) {
      products = [
        ...products,
        {
          id: productAdd?.id,
          code: productAdd?.code,
          name: productAdd?.name,
          quanlity: 1,
          price: productAdd?.price,
          image: productAdd?.image,
        },
      ];
    }
  } else
    products = [
      {
        id: productAdd?.id,
        name: productAdd?.name,
        code: productAdd?.code,
        quanlity: 1,
        price: productAdd?.price,
        image: productAdd?.image,
      },
    ];
  setCartToLS(JSON.stringify(products));
  return products;
};
export const increaseProduct = (id) => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  products?.find((product, i) => {
    if (product.id === id) {
      if (parseInt(product.quanlity) == 100) return;
      products[i].quanlity++;
    }
    return products;
  });
  setCartToLS(JSON.stringify(products));
  return products;
};
export const decreaseProduct = (id) => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  products?.find((product, i) => {
    if (product?.id === id) {
      if (parseInt(product.quanlity) <= 1) products.splice(i, 1);
      else products[i].quanlity--;
    }
    return products;
  });
  setCartToLS(JSON.stringify(products));
  return products;
};
export const changeProduct = (id, value) => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  if (parseInt(value) <= 100)
    products?.find((product, i) => {
      if (product?.id === id) {
        products[i].quanlity = parseInt(value);
      }
      return products;
    });
  setCartToLS(JSON.stringify(products));
  return products;
};
export const removeProduct = (id) => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  products?.find((product, i) => {
    if (product?.id === id) products.splice(i, 1);
    return products;
  });
  setCartToLS(JSON.stringify(products));
  return products;
};
export const getCart = () => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  return products;
};
