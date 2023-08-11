import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const TypeSevice = {
  getAll(query: any) {
    const apiUrl = `/type-product`;
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
    const apiUrl = `/type-product/${id}`;
    return APIService.request(
      METHOD_TYPE.PUT,
      apiUrl,
      this.update.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },

  delete(id: string) {
    const apiUrl = `/type-product/${id}`;
    return APIService.request(
      METHOD_TYPE.DELETE,
      apiUrl,
      this.update.name,
      cancelTokenHandlerObject,
      null,
      null
    );
  },
  create(payload: object) {
    const apiUrl = `/type-product/create`;
    return APIService.request(
      METHOD_TYPE.POST,
      apiUrl,
      this.update.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(TypeSevice);

export default TypeSevice;
