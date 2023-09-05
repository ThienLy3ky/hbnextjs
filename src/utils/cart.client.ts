import { setCartToLS, getCartFromLS } from "./cart";
interface productcart {
  _id: string;
  name: string;
  code: string;
  image: string;
  size: string;
  group: string;
  style: string;
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
    products?.find((product: productcart, i: number) => {
      if (product._id === productAdd._id) {
        products[i].name = productAdd?.name;
        products[i].code = productAdd?.code;
        products[i].image = productAdd?.image;
        products[i].size = productAdd?.size;
        products[i].group = productAdd?.group;
        products[i].style = productAdd?.style;
        products[i].priceNew = productAdd?.priceNew;
        products[i].quanlity++;
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
// export const increaseProduct = (id: string) => {
//   let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
//   products?.find((product, i: number) => {
//     if (product.id === id) {
//       if (parseInt(product.quanlity) == 100) return;
//       products[i].quanlity++;
//     }
//     return products;
//   });
//   setCartToLS(JSON.stringify(products));
//   return products;
// };
// export const decreaseProduct = (id) => {
//   let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
//   products?.find((product, i) => {
//     if (product?.id === id) {
//       if (parseInt(product.quanlity) <= 1) products.splice(i, 1);
//       else products[i].quanlity--;
//     }
//     return products;
//   });
//   setCartToLS(JSON.stringify(products));
//   return products;
// };
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
// export const removeProduct = (id) => {
//   let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
//   products?.find((product, i) => {
//     if (product?.id === id) products.splice(i, 1);
//     return products;
//   });
//   setCartToLS(JSON.stringify(products));
//   return products;
// };
export const getCart = () => {
  let products = getCartFromLS() ? JSON.parse(getCartFromLS()) : false;
  return products;
};
