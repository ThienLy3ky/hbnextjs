import {
  setToken,
  setRoler,
  getRoler,
  getToken,
} from "@/src/utils/action.helper";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  template: {},
  priceGroup: {},
  userData: getToken(),
  adminRole: getRoler(),
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
      setToken(action.payload);
      state.userData = action.payload;
    },
    setRole: (state, action) => {
      setRoler(action.payload);
      state.adminRole = action.payload;
    },
  },
});

export const { setTemplate, setPriceGroup, setUserData, setRole } =
  appSlice.actions;

export default appSlice.reducer;
