import * as store from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";

import { methods, setName, deleteName } from "./reducers/authUser";
import { methodsCategory } from "./reducers/selectCategory";
import { productsMethodsInter } from "./reducers/products";
import { methodsShooping } from "./reducers/shoppingList";
export { useAppDispatch, useAppSelector };

export const authUserMethods = methods;
export const categoryMethods = methodsCategory;
export const productsMethods = productsMethodsInter;
export const shoopingMethods = methodsShooping;
export const userActions = { setName, deleteName };
export default store;
