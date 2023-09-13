import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import TemplateService from "../api/template.api";
import { setPriceGroup, setTemplate } from "./slice";
import { getToken } from "@/src/utils/action.helper";
import UserAdminService from "../api/login.api";
export default class ReduxService {
  static async callDispatchAction(action: any) {
    store.dispatch(action);
  }

  static async getSetting() {
    const res = await TemplateService.getAll();
    ReduxService.callDispatchAction(setTemplate(res));
  }
  static async getGroupPrice() {
    const res = await TemplateService.getForAdmin();
    ReduxService.callDispatchAction(setPriceGroup(res));
  }
  static getUserAdmin() {
    const { app } = store.getState();
    const { userData } = app;
    return userData || getToken();
  }
  static getBearerToken(tokenUserData = false) {
    const userAdmin = ReduxService.getUserAdmin();

    if (userAdmin && !tokenUserData) {
      return `Bearer ${userAdmin.token}`;
    } else {
      return null;
    }
  }
  static getBearerReToken(tokenUserData = false) {
    const userAdmin = ReduxService.getUserAdmin();

    if (userAdmin && !tokenUserData) {
      return `Bearer ${userAdmin.refreshToken}`;
    } else {
      return null;
    }
  }
}
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
