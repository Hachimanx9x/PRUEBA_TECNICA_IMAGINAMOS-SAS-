import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { TextOptions } from "./types";
import { setCategoryName } from "./actions";
interface SetCategory {
  setCategory: TextOptions;
}

const initialState: SetCategory = {
  setCategory: "All",
};

export const sliceCategoryName = createSlice({
  name: "setCategoryName",
  initialState,
  reducers: {
    setCategorys: (state, action: PayloadAction<TextOptions>) => {
      state.setCategory = action.payload;
    },
  },
});
export const { setCategorys } = sliceCategoryName.actions;
export const methodsCategory = { setCategoryName };
export const selectCategoryName = (state: RootState) =>
  state.selectCategory.setCategory;
export default sliceCategoryName.reducer;
