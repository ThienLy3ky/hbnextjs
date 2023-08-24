import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";
const apiUrl = `/auth`;
const UserAdminService = {
  login(payload: any) {
    return APIService.request(
      METHOD_TYPE.POST,
      apiUrl + "/login",
      this.login.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },
  signup(payload: object) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/signup`,
      this.signup.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },
  getnewpasword(payload: object) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/getnewpasword`,
      this.getnewpasword.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(UserAdminService);

export default UserAdminService;
