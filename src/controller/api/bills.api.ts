import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const apiUrl = `/type-product`;
const TypeService = {
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
      this.update.name,
      cancelTokenHandlerObject,
      null,
      null
    );
  },
  create(payload: object) {
    return APIService.request(
      METHOD_TYPE.POST,
      `${apiUrl}`,
      this.update.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(TypeService);

export default TypeService;
