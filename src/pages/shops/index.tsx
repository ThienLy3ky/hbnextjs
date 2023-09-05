import CardProductShort from "@/src/component/card/card.product.short";
import TitlePage from "@/src/component/title";
import Pagination from "@/src/component/pagination/pagination-client";
import SortClient from "@/src/component/sort/sort-client";
import FilterClient from "@/src/component/filter/filter-client";
import ClientLayout from "@/src/component/layout/client.layout";
import useSearchHook from "@/src/controller/hooks/search.client.hook";
import { useState } from "react";
import { useSelector } from "react-redux";
import HomeModal from "@/src/create_update/client/home";
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
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light btn-product-short">
                      <i className="fa fa-th-large"></i>
                    </button>
                    <button className="btn btn-sm btn-light ml-2 btn-product-long">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  <SortClient />
                </div>
              </div>
              <div className="col-12 p-0 m-0 product-short">
                {data?.items?.map((product: any) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 pb-1"
                    key={product._id}
                  >
                    <CardProductShort
                      setCart={(e: any) => setProducts(product)}
                      openModal={() => setModal(!modal)}
                      product={product}
                    />
                  </div>
                ))}
              </div>
              <div className="col-12 p-0 m-0 product-long"> advas</div>
              <Pagination />
            </div>
          </div>
          {/* <!-- Shop Product End --> */}
        </div>
      </div>
      <HomeModal
        show={modal}
        data={products}
        onclose={() => setModal(!modal)}
      />
    </ClientLayout>
  );
}
