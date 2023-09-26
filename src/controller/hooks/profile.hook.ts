import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import ProfileService from "../api/user";

const getData = async ({ queryKey }: any) => {
  const res = await ProfileService.getListorder(queryKey[1]);
  return res;
};

const useProfilelHook = (status: any) => {
  const { data, isLoading } = useQuery([QUERY_KEY.profile, status], getData);
  return {
    isLoading,
    data,
  };
};

export default useProfilelHook;
