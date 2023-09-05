import CardProductShort from "@/src/component/card/card.product.short";
import TitlePage from "@/src/component/title";
import Pagination from "@/src/component/pagination/pagination-client";
import SortClient from "@/src/component/sort/sort-client";
import FilterClient from "@/src/component/filter/filter-client";
import ClientLayout from "@/src/component/layout/client.layout";
import useSearchHook from "@/src/controller/hooks/search.client.hook";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Shops() {
  const dataSelect = useSelector((state: any) => state.app?.template);

  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState({});
  const [query, setQuery] = useState({
    limit: 30,
    page: 1,
    order: "desc",
    orderBy: "createdAt",
  });
  const { data, refetch, isLoading } = useSearchHook(query);
  return (
    <ClientLayout>
      <TitlePage
        nameLink={{ name: "Trang Chủ", link: "/" }}
        namePage="Nhãn Hàng"
      />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <FilterClient option={dataSelect} />
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <SortClient />
              </div>

              {data?.items?.map((product: any) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 pb-1"
                  key={product._id}
                >
                  <CardProductShort
                    setCart={(e: any) => setProducts(e)}
                    openModal={() => setModal(!modal)}
                    product={product}
                  />
                </div>
              ))}
              <Pagination />
            </div>
          </div>
          {/* <!-- Shop Product End --> */}
        </div>
      </div>
    </ClientLayout>
  );
}
