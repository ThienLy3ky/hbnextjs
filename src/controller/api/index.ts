import QueryString from "query-string";
// import ReduxService from "../Redux/redux";
// import { showNotificationError } from "@/common/function";
import axiosInstance from "./axios";
import { METHOD_TYPE } from "../keys/method";
import { showNotificationError } from "@/src/component/notification/notificationFc";
import ReduxService from "../redux";
import { setRole, setUserData } from "@/src/controller/redux/slice";
import { clearRoler, clearToken } from "@/src/utils/action.helper";

export default class APIService {
  static async request(
    method: METHOD_TYPE,
    apiUrl: string,
    name: string,
    cancelTokenHandlerObject: any,
    query: any,
    body: any,
    token = null,
    header = {}
  ) {
    const AUTH_TOKEN = token || ReduxService.getBearerToken();
    // const AUTH_TOKEN = token; /* || ReduxService.getBearerToken(); */
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
    if (header) {
      config.headers = { ...config.headers, header };
    }

    return axiosInstance
      .request(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        if (!error.response) {
          showNotificationError("Lỗi kết nối mạng");
          return;
        }
        if (error?.response?.status === 403) {
          showNotificationError(
            "Your session has expired. Please sign in again to continue"
          );
          // ReduxService.resetApp();
        } else if (error?.response?.status === 401) {
          showNotificationError(
            "Your session has expired. Please sign in again to continue"
          );
          // setUserData("");
          // setRole("");
          // clearRoler();
          // clearToken();
        } else if (error?.response?.status === 500) {
          showNotificationError("Lỗi Cập nhật");
          showNotificationError(error?.response?.data?.message);
          // setUserData("");
          // setRole("");
          // clearRoler();
          // clearToken();
        } else if (!error?.message?.includes("canceled")) {
          showNotificationError(error?.response?.data?.message);

          // (error?.response?.data?.message);
        }
        return false;
      });
  }
}
// export class axiosFormData {
//   static async request(
//     method: METHOD_TYPE,
//     apiUrl: string,
//     name: string,
//     cancelTokenHandlerObject: any,
//     query: any,
//     body: any,
//     token = null
//   ) {
//     const AUTH_TOKEN = token; /* || ReduxService.getBearerToken(); */
//     let url = apiUrl;
//     if (query) {
//       url = url + "?" + QueryString.stringify(query);
//     }
//     let config = {
//       method,
//       url,
//       cancelToken: undefined,
//       headers: {},
//       data: "",
//     };
//     if (cancelTokenHandlerObject) {
//       config.cancelToken =
//         cancelTokenHandlerObject[name].handleRequestCancellation().token;
//     }
//     if (AUTH_TOKEN) {
//       config.headers = {
//         Authorization: AUTH_TOKEN,
//       };
//     }
//     if (body) {
//       config.data = body;
//     }

//     return axiosInstance
//       .request(config)
//       .then(function (response) {
//         return response.data;
//       })
//       .catch(function (error) {
//         if (error?.response?.status === 403) {
//           showNotificationError(
//             "Your session has expired. Please sign in again to continue"
//           );
//           // ReduxService.resetApp();
//         } else if (!error?.message?.includes("canceled")) {
//           showNotificationError(error?.response?.data?.message);

//           // (error?.response?.data?.message);
//         }
//         return false;
//       });
//   }
// }
