import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const apiUrl = `/user`;
const UserService = {
  getListorder(status?: number) {
    return APIService.request(
      METHOD_TYPE.GET,
      `${apiUrl}/order`,
      this.getListorder.name,
      cancelTokenHandlerObject,
      { status },
      null,
      null
    );
  },
  addAddress(addAddress: string) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/address`,
      this.addAddress.name,
      cancelTokenHandlerObject,
      null,
      { addAddress },
      null
    );
  },
  cancelOrder(code: string) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/cancel`,
      this.cancelOrder.name,
      cancelTokenHandlerObject,
      null,
      { code },
      null
    );
  },
  updateProfile(data: any) {
    return APIService.request(
      METHOD_TYPE.PUT,
      `${apiUrl}`,
      this.updateProfile.name,
      cancelTokenHandlerObject,
      null,
      data,
      null
    );
  },
  changePassword(data: any) {
    return APIService.request(
      METHOD_TYPE.PUT,
      `${apiUrl}/change-passwork`,
      this.updateProfile.name,
      cancelTokenHandlerObject,
      null,
      data,
      null
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(UserService);

export default UserService;
