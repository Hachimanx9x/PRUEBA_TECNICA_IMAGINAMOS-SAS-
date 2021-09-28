import { setProducts, filterProducts, selectproducts } from ".";
import { productsType } from "./types";
import { TextOptions } from "../selectCategory/types";
export const setProductsmethod = (products: productsType) => {
  return setProducts(products);
};

export const filterProductsmethod = (category: TextOptions) => {
  return filterProducts(category);
};
