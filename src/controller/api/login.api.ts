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
  getName() {
    return APIService.request(
      METHOD_TYPE.GET,
      `${apiUrl}/profile`,
      this.getName.name,
      cancelTokenHandlerObject,
      null,
      null
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
  google() {
    return APIService.request(
      METHOD_TYPE.GET,
      `${apiUrl}/google`,
      this.google.name,
      cancelTokenHandlerObject,
      null,
      null
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
  verifyCode(payload: { email: string; code: string }) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/verify`,
      this.verifyCode.name,
      cancelTokenHandlerObject,
      null,
      payload,
      null
    );
  },

  reCode(email: string) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/resend/${email}`,
      this.reCode.name,
      cancelTokenHandlerObject,
      null,
      null,
      null
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(UserAdminService);

export default UserAdminService;
