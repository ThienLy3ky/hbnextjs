import { useQuery } from "react-query";
import { QUERY_KEY } from "../keys/querykey";
import BannerService from "../api/client.api";

const getData = async () => {
  const res = await BannerService.getToHome();
  return res;
};

const usePaymentHook = () => {
  const { data, isLoading } = useQuery([QUERY_KEY.Banner], getData);
  return {
    isLoading,
    data: {
      bannerText: data?.bannerText || [],
      bannerImage: data?.bannerImage || [],
      flashProduct: data?.flashProduct || [],
      newProduct: data?.newProduct || [],
      saleProduct: data?.saleProduct || [],
    },
  };
};

export default usePaymentHook;
