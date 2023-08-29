import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const apiUrl = `/client`;
const categoriesService = {
  getToHome(query: any) {
    return APIService.request(
      METHOD_TYPE.GET,
      apiUrl,
      this.getToHome.name,
      cancelTokenHandlerObject,
      query,
      null,
      null
    );
  },
  getDetail(id: string, payload: object, code: string) {
    return APIService.request(
      METHOD_TYPE.PUT,
      `${apiUrl}/${id}`,
      this.getDetail.name,
      cancelTokenHandlerObject,
      { code },
      payload,
      null,
      { "Content-Type": "multipart/form-data" }
    );
  },
  getListSearch(id: string, payload: object, code: string) {
    return APIService.request(
      METHOD_TYPE.PUT,
      `${apiUrl}/${id}`,
      this.getDetail.name,
      cancelTokenHandlerObject,
      { code },
      payload,
      null,
      { "Content-Type": "multipart/form-data" }
    );
  },
  addCart(id: string) {
    return APIService.request(
      METHOD_TYPE.DELETE,
      `${apiUrl}/${id}`,
      this.addCart.name,
      cancelTokenHandlerObject,
      null,
      null
    );
  },
  payment(payload: object, code: string) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}`,
      this.payment.name,
      cancelTokenHandlerObject,
      { code },
      payload,
      null,
      { "Content-Type": "multipart/form-data" }
    );
  },
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
