import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { AddPropsProducts, AddPropsProduct } from "./types";
import { setproductoShopping } from "./actions";
interface SetShoopingList {
  setShoopingList: AddPropsProducts;
}

const initialState: SetShoopingList = {
  setShoopingList: [],
};

export const sliceShoopingList = createSlice({
  name: "setShoopingList",
  initialState,
  reducers: {
    setproducts: (state, actions: PayloadAction<AddPropsProduct>) => {
      state.setShoopingList = filterShooping(
        state.setShoopingList,
        actions.payload
      );
    },
  },
});

function filterShooping(
  state: AddPropsProducts,
  product: AddPropsProduct
): AddPropsProducts {
  if (state.length > 0) {
    let exists: boolean = false;
    for (let i = 0; i < state.length; i++) {
      if (state[i].name === product.name) {
        state[i].amount += 1;
        exists = true;
      }
    }
    if (!exists) {
      state.push(product);
    }
    return state;
  }
  state.push(product);

  return state;
}

export const { setproducts } = sliceShoopingList.actions;
export const methodsShooping = { setproductoShopping };
export const selectShoppingProducts = (state: RootState) =>
  state.shoppingList.setShoopingList;
export default sliceShoopingList.reducer;
