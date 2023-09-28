import CardProductShort from "@/src/component/card/card.product.short";
import TitlePage from "@/src/component/title";
import Pagination from "@/src/component/pagination/pagination-client";
import SortClient from "@/src/component/sort/sort-client";
import FilterClient from "@/src/component/filter/filter-client";
import ClientLayout from "@/src/component/layout/client.layout";
import useSearchHook from "@/src/controller/hooks/search.client.hook";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeModal from "@/src/create_update/client/home";
import CardProductLong from "@/src/component/card/card.product.long";
import { useSearchParams } from "next/navigation";
import { FilledInput, Input, InputAdornment } from "@mui/material";
import { useRouter } from "next/router";
export default function Shops() {
  const searchParams = useSearchParams();
  const type = searchParams?.get("type");
  const keyParam = searchParams?.get("key");
  const categories = searchParams?.get("categories");
  const company = searchParams?.get("company");
  const dataSelect = useSelector((state: any) => state.app?.template);

  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState({});
  const [query, setQuery] = useState({
    limit: 30,
    page: 1,
    order: "desc",
    orderBy: "createdAt",
    type: [],
    company: [],
    key: "",
    categories: [],
    price: [1000, 1000000],
  });
  const router = useRouter();
  const [key, setKey] = useState<string>("");
  const { data, refetch, isLoading } = useSearchHook(query);
  useEffect(() => {
    setKey(keyParam ?? "");
    setQuery({
      limit: 30,
      page: 1,
      order: "desc",
      orderBy: "createdAt",
      type: type ? JSON.parse(type) : [],
      company: company ? JSON.parse(company) : [],
      categories: categories ? JSON.parse(categories) : [],
      key: keyParam ?? "",
      price: [1000, 1000000],
    });
  }, [categories, type, company, keyParam]);
  const handleSearch = (e: any) => {
    router.replace({
      query: {
        ...router.query,
        key,
      },
    });
  };
  return (
    <ClientLayout>
      <TitlePage
        nameLink={{ name: "Trang Chủ", link: "/" }}
        namePage="Nhãn Hàng"
      />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <FilterClient
            option={dataSelect}
            query={query}
            setQuery={(e: any) => setQuery(e)}
          />
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ height: "2.25rem" }}
                >
                  <Input
                    type="text"
                    placeholder="Tìm kiếm"
                    value={key}
                    onChange={({ target }) => setKey(target.value)}
                    style={{ borderRadius: "0.25rem" }}
                    size="small"
                    className="col-md-6"
                    endAdornment={
                      <InputAdornment position="end">
                        <i
                          className="fa-solid fa-search"
                          onClick={handleSearch}
                        ></i>
                      </InputAdornment>
                    }
                  />
                  <div className="d-inline-flex">
                    <SortClient />
                    <button className="ml-2 btn btn-sm btn-light btn-product-short">
                      <i className="fa-solid fa-th-large"></i>
                    </button>
                    <button className="btn btn-sm btn-light ml-2 btn-product-long">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 p-0 m-0 d-flex align-items-center product-short show">
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
              <div className="col-12 p-0 m-0 product-long">
                {data?.items?.map((product: any) => (
                  <div className="col-12 pb-1" key={product._id}>
                    <CardProductLong
                      setCart={(e: any) => setProducts(product)}
                      openModal={() => setModal(!modal)}
                      product={product}
                    />
                  </div>
                ))}
              </div>
              {data?.total / data.limit > 1 ? (
                <div className="col-12 load-more">
                  <button
                    className="col-12 btn btn-info"
                    style={{ borderRadius: "10px" }}
                    onClick={() =>
                      setQuery({ ...query, limit: (query?.limit ?? 0) + 30 })
                    }
                  >
                    Tải thêm...
                  </button>
                </div>
              ) : (
                ""
              )}
              <div className="col-12 pagination-page">
                <Pagination data={data} />
              </div>
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
