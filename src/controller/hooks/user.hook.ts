import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import auther from "../api/login.api";
import { getToken } from "@/src/utils/action.helper";

const getData = async () => {
  if (getToken()) {
    const res = await auther.getName();
    return res;
  }
  return false;
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
