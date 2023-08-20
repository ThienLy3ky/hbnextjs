import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import TemplateService from "../api/template.api";
import { setPriceGroup, setTemplate } from "./slice";
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
}
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
