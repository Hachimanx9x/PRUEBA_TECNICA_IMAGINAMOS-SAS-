import { configureStore } from "@reduxjs/toolkit";
import authUser from "./reducers/authUser";
import selectCategory from "./reducers/selectCategory";
import products from "./reducers/products";
import shoppingList from "./reducers/shoppingList";
export const store = configureStore({
  reducer: { authUser, selectCategory, products, shoppingList },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
