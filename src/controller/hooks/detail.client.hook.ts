import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import BannerService from "../api/client.api";

const getData = async () => {
  const res = await BannerService.getToHome();
  return res;
};

const useDetailHook = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.Banner], getData);
  return {
    isLoading,
    data: data,
  };
};

export default useDetailHook;
