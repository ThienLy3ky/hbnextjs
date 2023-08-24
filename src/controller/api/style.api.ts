import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const apiUrl = `/style-product`;
const StyleService = {
  getAll(query: any) {
    return APIService.request(
      METHOD_TYPE.GET,
      apiUrl,
      this.getAll.name,
      cancelTokenHandlerObject,
      query,
      null,
      null
    );
  },
  update(id: string, payload: object) {
    return APIService.request(
      METHOD_TYPE.PUT,
      `${apiUrl}/${id}`,
      this.update.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },

  delete(id: string) {
    return APIService.request(
      METHOD_TYPE.DELETE,
      `${apiUrl}/${id}`,
      this.delete.name,
      cancelTokenHandlerObject,
      null,
      null
    );
  },
  create(payload: object) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}`,
      this.create.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },
  checkCode(payload: object, code: string) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}/check/${code}`,
      this.checkCode.name,
      cancelTokenHandlerObject,
      null,
      payload,
      null
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(StyleService);

export default StyleService;
