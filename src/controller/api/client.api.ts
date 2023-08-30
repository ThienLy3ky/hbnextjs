import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const apiUrl = `/client`;
const categoriesService = {
  getToHome() {
    return APIService.request(
      METHOD_TYPE.GET,
      apiUrl,
      this.getToHome.name,
      cancelTokenHandlerObject,
      null,
      null,
      null
    );
  },
  getDetail(id: string) {
    return APIService.request(
      METHOD_TYPE.GET,
      `${apiUrl}/${id}`,
      this.getDetail.name,
      cancelTokenHandlerObject,
      null,
      null
    );
  },
  getListSearch(query: any) {
    return APIService.request(
      METHOD_TYPE.GET,
      `${apiUrl}/list-search`,
      this.getDetail.name,
      cancelTokenHandlerObject,
      query,
      null,
      null,
      { "Content-Type": "multipart/form-data" }
    );
  },
  addCart(payload: any) {
    return APIService.request(
      METHOD_TYPE.PUT,
      `${apiUrl}/cart`,
      this.addCart.name,
      cancelTokenHandlerObject,
      null,
      null
    );
  },
  payment(payload: object) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/payment`,
      this.payment.name,
      cancelTokenHandlerObject,
      null,
      payload,
      null,
      { "Content-Type": "multipart/form-data" }
    );
  },
  //
  getProfile(payload: object, code: string) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/check/${code}`,
      this.getProfile.name,
      cancelTokenHandlerObject,
      null,
      payload,
      null
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(categoriesService);

export default categoriesService;
