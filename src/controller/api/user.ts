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
};

const cancelTokenHandlerObject = createCancelTokenHandler(UserService);

export default UserService;
