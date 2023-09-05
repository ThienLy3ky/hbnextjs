import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import BannerService from "../api/client.api";

const getData = async ({ queryKey }: any) => {
  const res = await BannerService.getDetail(queryKey[1]);
  return res;
};

const useDetailHook = (code: any) => {
  const { data, isLoading } = useQuery(
    [QUERY_KEY.detailProduct, code],
    getData
  );
  return {
    isLoading,
    data: { items: data?.items, data: data?.data },
  };
};

export default useDetailHook;
