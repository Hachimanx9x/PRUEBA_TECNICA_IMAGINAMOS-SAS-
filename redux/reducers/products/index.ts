import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { productsType } from "./types";
import { setProductsmethod, filterProductsmethod } from "./actions";
import { TextOptions } from "../selectCategory/types";
interface SetProducts {
  setProducts: productsType | [];
  fiterProducts: productsType | [];
}
const initialState: SetProducts = {
  setProducts: [],
  fiterProducts: [],
};

export const sliceProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, actions: PayloadAction<productsType | []>) => {
      state.setProducts = actions.payload;
    },
    filterProducts: (state, actions: PayloadAction<TextOptions>) => {
      const category = actions.payload;
      state.fiterProducts = filterPro(state.setProducts, category);
    },
  },
});

function filterPro(
  state: productsType | [],
  category: TextOptions
): productsType {
  if (state.length > 0) {
    let finalData: productsType = [];
    if (category === "All") {
      finalData = state;
    }
    for (let i = 0; i < state.length; i++) {
      if (category === "Asian") {
        if (state[i].name === "Plato de salmón") {
          finalData.push(state[i]);
        }
      }
      if (category === "Barbecue") {
        if (state[i].name === "Filete de ternera con salsa") {
          finalData.push(state[i]);
        }
      }
      if (category === "Burgers") {
        if (state[i].name === "Hamburguesa") {
          finalData.push(state[i]);
        }
      }
      if (category === "Dessers") {
        if (state[i].name === "Postre") {
          finalData.push(state[i]);
        }
      }
      if (category === "Pizza") {
        finalData = [];
      }
      if (category === "Sushi") {
        finalData = [];
      }
      if (category === "Thai") {
        finalData = [];
      }
    }
    return finalData;
  }
  return [];
}

export const { setProducts, filterProducts } = sliceProducts.actions;
export const productsMethodsInter = { setProductsmethod, filterProductsmethod };
export const selectproducts = (state: RootState) => state.products;
export default sliceProducts.reducer;
