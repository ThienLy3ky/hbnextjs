import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  template: {},
  priceGroup: {},
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
  },
});

export const { setTemplate, setPriceGroup } = appSlice.actions;

export default appSlice.reducer;
