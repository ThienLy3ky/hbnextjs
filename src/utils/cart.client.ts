import { setCartToLS, getCartFromLS } from "./cart";
export interface productcart {
  _id: string;
  name: string;
  code: string;
  image: string;
  size: any;
  group: any;
  style: any;
  quanlity: number;
  priceNew: number;
}
export const addCart = (productAdd: productcart) => {
  if (!productAdd) return false;
  let products: productcart[] = getCartFromLS()
    ? JSON.parse(getCartFromLS())
    : false;
  let isProduct = false;
  if (products && products.length > 0) {
    products?.filter((product: productcart, i: number) => {
      if (
        product._id === productAdd._id &&
        product.group._id === productAdd.group?._id &&
        product.size._id === productAdd.size._id &&
        product.style._id === productAdd.style._id
      ) {
        products[i].name = productAdd?.name;
        products[i].code = productAdd?.code;
        products[i].image = productAdd?.image;
        products[i].size = productAdd?.size;
        products[i].group = productAdd?.group;
        products[i].style = productAdd?.style;
        products[i].priceNew = productAdd?.priceNew;
        products[i].quanlity += productAdd.quanlity ?? 1;
        return (isProduct = true);
      }
    });
    if (!isProduct) {
      products = [
        ...products,
        {
          _id: productAdd?._id,
          code: productAdd?.code,
          name: productAdd?.name,
          quanlity: productAdd.quanlity,
          size: productAdd.size,
          style: productAdd.style,
          group: productAdd.group,

          priceNew: productAdd?.priceNew,
          image: productAdd?.image,
        },
      ];
    }
  } else
    products = [
      {
        _id: productAdd?._id,
        code: productAdd?.code,
        name: productAdd?.name,
        quanlity: productAdd.quanlity,
        size: productAdd.size,
        style: productAdd.style,
        group: productAdd.group,

        priceNew: productAdd?.priceNew,
        image: productAdd?.image,
      },
    ];
  setCartToLS(JSON.stringify(products));
  return products;
};
export const increaseProduct = (productAdd: productcart) => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  products?.filter((product: productcart, i: number) => {
    if (
      product._id === productAdd._id &&
      product.group._id === productAdd.group?._id &&
      product.size._id === productAdd.size._id &&
      product.style._id === productAdd.style._id
    ) {
      if (product.quanlity >= 100) return;
      products[i].quanlity++;
    }
    return products;
  });
  setCartToLS(JSON.stringify(products));
  return products;
};
export const decreaseProduct = (productAdd: productcart) => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  products?.filter((product: productcart, i: number) => {
    if (
      product._id === productAdd._id &&
      product.group._id === productAdd.group?._id &&
      product.size._id === productAdd.size._id &&
      product.style._id === productAdd.style._id
    ) {
      if (product.quanlity <= 1) products.splice(i, 1);
      else products[i].quanlity--;
    }
    return products;
  });
  setCartToLS(JSON.stringify(products));
  return products;
};
// export const changeProduct = (id, value) => {
//   let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
//   if (parseInt(value) <= 100)
//     products?.find((product, i) => {
//       if (product?.id === id) {
//         products[i].quanlity = parseInt(value);
//       }
//       return products;
//     });
//   setCartToLS(JSON.stringify(products));
//   return products;
// };
export const removeProduct = (productAdd: productcart) => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  products?.find((product: productcart, i: number) => {
    if (
      product._id === productAdd._id &&
      product.group._id === productAdd.group?._id &&
      product.size._id === productAdd.size._id &&
      product.style._id === productAdd.style._id
    )
      products.splice(i, 1);
    return products;
  });
  setCartToLS(JSON.stringify(products));
  return products;
};
export const getCart = () => {
  try {
    return getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  } catch (error) {
    console.log(error);
    return "";
  }
};
export const setCartsCT = (
  carts: productcart[],
  productCart: productcart[]
) => {
  const data = carts.filter((__product: productcart, i: number) => {
    for (const _product of productCart) {
      if (
        _product._id === __product._id &&
        _product.group._id === __product.group?._id &&
        _product.size._id === __product.size._id &&
        _product.style._id === __product.style._id
      )
        return false;
    }
    return __product;
  });
  setCartToLS(JSON.stringify(data));
  return data;
};
