import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const TemplateSevice = {
  getAll() {
    return APIService.request(
      METHOD_TYPE.GET,
      "/template",
      this.getAll.name,
      cancelTokenHandlerObject,
      null,
      null,
      null
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(TemplateSevice);

export default TemplateSevice;
