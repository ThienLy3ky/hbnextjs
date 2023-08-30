import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import BannerService from "../api/banner.api";

const getData = async ({ queryKey }: any) => {
  const query = queryKey[1];
  const res = await BannerService.getAll(query);
  return {
    items: res || [],
    totalPages: res?.totalPages || 0,
    page: res?.page || 1,
    total: res?.total || 0,
    limit: res?.limit || 20,
  };
};

const useUserHook = (query: any) => {
  const { data, isLoading, refetch } = useQuery(
    [QUERY_KEY.Banner, query],
    getData
  );
  return {
    isLoading,
    data: {
      items: data?.items || [],
      totalPages: data?.totalPages || 0,
      page: data?.page || 1,
      total: data?.total || 0,
      limit: data?.limit || 20,
    },
    refetch,
  };
};

export default useUserHook;
