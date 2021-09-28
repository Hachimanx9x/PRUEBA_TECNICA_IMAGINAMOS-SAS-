import { AddPropsProduct } from "./types";
import { setproducts } from ".";
export const setproductoShopping = (producto: AddPropsProduct) => {
  return setproducts(producto);
};
