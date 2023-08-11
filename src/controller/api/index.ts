import QueryString from "query-string";
// import ReduxService from "../Redux/redux";
// import { showNotificationError } from "@/common/function";
import axiosInstance from "./axios";
import { METHOD_TYPE } from "../keys/method";

export default class APIService {
  static async request(
    method: METHOD_TYPE,
    apiUrl: string,
    name: string,
    cancelTokenHandlerObject: any,
    query: any,
    body: any,
    token = null
  ) {
    const AUTH_TOKEN = token; /* || ReduxService.getBearerToken(); */
    let url = apiUrl;
    if (query) {
      url = url + "?" + QueryString.stringify(query);
    }
    let config = {
      method,
      url,
      cancelToken: undefined,
      headers: {},
      data: "",
    };
    if (cancelTokenHandlerObject) {
      config.cancelToken =
        cancelTokenHandlerObject[name].handleRequestCancellation().token;
    }
    if (AUTH_TOKEN) {
      config.headers = {
        Authorization: AUTH_TOKEN,
      };
    }
    if (body) {
      config.data = body;
    }

    return axiosInstance
      .request(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        if (error?.response?.status === 403) {
          // showNotificationError(
          //   "Your session has expired. Please sign in again to continue"
          // );
          // ReduxService.resetApp();
        } else if (!error?.message?.includes("canceled")) {
          console.log(error?.response?.data?.message);
          // showNotificationError(error?.response?.data?.message);
        }
        console.log("500");

        return false;
      });
  }
}
