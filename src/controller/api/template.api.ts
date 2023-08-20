import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const TemplateService = {
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
  getForAdmin() {
    return APIService.request(
      METHOD_TYPE.GET,
      "/admin-template",
      this.getForAdmin.name,
      cancelTokenHandlerObject,
      null,
      null,
      null
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(TemplateService);

export default TemplateService;
