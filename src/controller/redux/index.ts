import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import TemplateService from "../api/template.api";
import { setTemplate } from "./slice";
export default class ReduxService {
  static async callDispatchAction(action: any) {
    store.dispatch(action);
  }

  // static getBearerToken(tokenUserData = false) {
  //   const userData = ReduxService.getUserData();
  //   const userAdmin = ReduxService.getUserAdmin();
  //   if (userAdmin && !tokenUserData) {
  //     return `Bearer ${userAdmin.token}`;
  //   }
  //   if (ReduxService.checkIsConnected()) {
  //     return `Bearer ${userData.token}`;
  //   } else {
  //     return null;
  //   }
  // }

  // static getUserData() {
  //   const { app } = store.getState();
  //   const { userData } = app;
  //   return userData;
  // }

  // static getUserAdmin() {
  //   const { app } = store.getState();
  //   const { userAdmin } = app;
  //   return userAdmin;
  // }

  // static async updateUserData(data) {
  //   const userData = this.getUserData();
  //   const newUser = { ...userData, ...data };
  //   ReduxService.callDispatchAction(setUserData(newUser));
  // }

  // static async resetApp() {
  //   const { app } = store.getState();
  //   const { connectionMethod } = app;
  //   if (connectionMethod === CONNECTION_METHOD.METAMASK) {
  //     ReduxService.resetUser();
  //   } else if (connectionMethod === CONNECTION_METHOD.WALLET_CONNECT) {
  //     WalletConnectServices.killSession();
  //   } else if (connectionMethod === CONNECTION_METHOD.WALLET_CONNECT_V2) {
  //     WalletConnectV2Services.disconnect();
  //   } else {
  //     await disconnect();
  //     ReduxService.callDispatchAction(setActiveAccount(null));
  //     ReduxService.callDispatchAction(setUserData(null));
  //   }
  // }

  // static resetUser() {
  //   removeDataLocal(KEY_STORE.USER_SIGN);
  //   ReduxService.callDispatchAction(setUserData(null));
  //   ReduxService.callDispatchAction(setConnectionMethod(null));
  // }

  // static async refreshUser() {
  //   const userData = this.getUserData();
  //   const isConnected = ReduxService.checkIsConnected();
  //   if (isConnected) {
  //     // Call api get user
  //     // let resUser = await HubService.getUserBySignatureHub(userData.sig)
  //     let resUser = { address: userData?.address };
  //     if (resUser && resUser.address) {
  //       let newUser = {
  //         ...userData,
  //         ...resUser,
  //       };
  //       ReduxService.callDispatchAction(setUserData(newUser));
  //     } else {
  //       ReduxService.callDispatchAction(setUserData(null));
  //     }
  //   }
  // }

  // static getToken(address, chainId) {
  //   const { app } = store.getState();
  //   const { acceptToken } = app;
  //   return acceptToken?.find(
  //     (item) =>
  //       item?.address?.toLowerCase() === address?.toLowerCase() &&
  //       parseInt(item.chainId) === parseInt(chainId)
  //   );
  // }

  static async getSetting() {
    const res = await TemplateService.getAll();
    ReduxService.callDispatchAction(setTemplate(res));
  }

  // static logout() {
  //   if (
  //     ReduxService.getConnectionMethod() === CONNECTION_METHOD.WALLET_CONNECT
  //   ) {
  //     WalletConnectServices.killSession();
  //   } else if (
  //     ReduxService.getConnectionMethod() === CONNECTION_METHOD.WALLET_CONNECT_V2
  //   ) {
  //     WalletConnectV2Services.disconnect();
  //   } else {
  //     ReduxService.resetUser();
  //   }
  // }
}
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
