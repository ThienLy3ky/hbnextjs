import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import ProductService from "../api/product.api";

const getData = async ({ queryKey }: any) => {
  const query = queryKey[1];
  const res = await ProductService.getAll(query);
  return {
    items: res?.data?.items || [],
    totalPages: res?.data?.totalPages || 0,
    page: res?.data?.page || 1,
    total: res?.data?.total || 0,
    limit: res?.data?.limit || 25,
  };
};

const useTypeHook = (query: any) => {
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
      limit: data?.limit || 25,
    },
    refetch,
  };
};

export default useTypeHook;
