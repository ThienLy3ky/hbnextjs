import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const apiUrl = `/client`;
const ClientService = {
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
  getDetail(code: string) {
    return APIService.request(
      METHOD_TYPE.GET,
      `${apiUrl}/${code}`,
      this.getDetail.name,
      cancelTokenHandlerObject,
      null,
      null
    );
  },
  getListSearch(query: any) {
    return APIService.request(
      METHOD_TYPE.GET,
      `${apiUrl}/search`,
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
      payload
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

const cancelTokenHandlerObject = createCancelTokenHandler(ClientService);

export default ClientService;
