import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import auther from "../api/login.api";

const getData = async () => {
  const res = await auther.getName();
  return res;
};

const useUserHook = () => {
  const { data, isLoading, refetch } = useQuery([QUERY_KEY.user], getData);
  return {
    isLoading,
    data: data,
    refetch,
  };
};

export default useUserHook;
