import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import ClientService from "../api/client.api";

const getData = async ({ queryKey }: any) => {
  const query = queryKey[1];
  const res = await ClientService.getListSearch(query);
  return {
    items: res?.items || [],
    totalPages: res?.totalPages || 0,
    page: res?.page || 1,
    total: res?.total || 0,
    limit: res?.limit || 20,
  };
};

const useSearchHook = (query: any) => {
  const { data, isLoading, refetch } = useQuery(
    [QUERY_KEY.Product, query],
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

export default useSearchHook;
