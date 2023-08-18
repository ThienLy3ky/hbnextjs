import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  template: {},
  priceGroup: {},
  // metamask: {
  //   accounts: [],
  //   address: "",
  // },
  // walletConnect: {
  //   connector: {},
  //   chainId: 0,
  //   accounts: [],
  //   address: "",
  //   session: {},
  //   appConnected: null,
  // },
  // walletConnectV2: {
  //   addresses: null,
  //   chainIds: [],
  // },
};
export const appSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    reset: () => initialState,
    setTemplate: (state, action) => {
      state.template = action.payload;
    },
    setPriceGroup: (state, action) => {
      state.priceGroup = action.payload;
    },
    // setWalletConnect: (state, action) => {
    //   state.walletConnect = action.payload;
    // },
    // setUserData: (state, action) => {
    //   saveDataLocal(KEY_STORE.SET_USER, action.payload);
    //   state.userData = action.payload;
    // },
  },
});

export const { setTemplate, setPriceGroup } = appSlice.actions;

export default appSlice.reducer;
