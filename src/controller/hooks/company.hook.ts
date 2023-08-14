import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import CompanyService from "../api/company.api";

const getData = async ({ queryKey }: any) => {
  const query = queryKey[1];
  const res = await CompanyService.getAll(query);
  console.log("🚀 ~ file: company.hook.ts:8 ~ getData ~ res:", res);
  return {
    items: res?.items || [],
    totalPages: res?.totalPages || 0,
    page: res?.page || 1,
    total: res?.total || 0,
    limit: res?.limit || 25,
  };
};

const useCompanyHook = (query: any) => {
  const { data, isLoading, refetch } = useQuery(
    [QUERY_KEY.CompanyProduct, query],
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

export default useCompanyHook;
