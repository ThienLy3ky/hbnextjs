import { createCancelTokenHandler } from "@/src/utils/utils";
import APIService from "./index";
import { METHOD_TYPE } from "../keys/method";

const apiUrl = `/setting`;
const SettingService = {
  updateOrCreate(payload: object) {
    return APIService.request(
      METHOD_TYPE.PUT,
      `${apiUrl}`,
      this.updateOrCreate.name,
      cancelTokenHandlerObject,
      null,
      payload
    );
  },
};

const cancelTokenHandlerObject = createCancelTokenHandler(SettingService);

export default SettingService;
