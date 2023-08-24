import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  template: {},
  priceGroup: {},
  userData: null,
  adminRole: null,
};
export const appSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    reset: () => initialState,
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
    setPriceGroup: (state, action) => {
      state.priceGroup = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setRole: (state, action) => {
      state.adminRole = action.payload;
    },
  },
});

export const { setTemplate, setPriceGroup, setUserData, setRole } =
  appSlice.actions;

export default appSlice.reducer;
