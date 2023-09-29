import ClientLayout from "@/src/component/layout/client.layout";
import Title from "@/src/component/title";
import useUserHook from "@/src/controller/hooks/user.hook";
import CheckOutContent from "@/src/create_update/checkout";

export default function CheckOut() {
  const { data, isLoading, refetch } = useUserHook();

  return !isLoading ? (
    <ClientLayout>
      <Title
        nameLink={{ name: "Trang Chủ", link: "/" }}
        namePage="Thanh toán"
      />
      <CheckOutContent data={data} />
    </ClientLayout>
  ) : (
    ""
  );
}
