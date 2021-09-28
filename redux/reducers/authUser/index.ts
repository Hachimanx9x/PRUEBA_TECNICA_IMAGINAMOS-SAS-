import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { authUser } from "./actions";
interface NameUSer {
  displayName: string;
}

const initialState: NameUSer = {
  displayName: "",
};

export const nameUserLog = createSlice({
  name: "userName",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    },
    deleteName: (state, _) => {
      state.displayName = "";
    },
  },
});

export const { setName, deleteName } = nameUserLog.actions;

export const methods = { authUser };

export const selectuserName = (state: RootState) => state.authUser.displayName;

export default nameUserLog.reducer;
