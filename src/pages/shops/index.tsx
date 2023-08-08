
import CardProductShort from "@/src/component/card/card.product.short";
import TitlePage from "@/src/component/title";
import products from "@/src/config/MOCK_DATA.product.json";
import Pagination from "@/src/component/pagination/pagination-client";
import SortClient from "@/src/component/sort/sort-client";
import FilterClient from "@/src/component/filter/filter-client";
import ClientLayout from "@/src/component/layout/client.layout";
export default function Shops() {
  return (
    <ClientLayout>
      <TitlePage
        nameLink={{ name: "Trang Chủ", link: "/" }}
        namePage="Nhãn Hàng"
      />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <FilterClient />
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <SortClient />
              </div>

              {products.slice(0, 10).map((product) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 pb-1"
                  key={product.id}
                >
                  <CardProductShort
                    name={product.name}
                    image={product.image}
                    rate={3.3}
                    oldPrice={product.priceOlder}
                    newPrice={product.priceNew}
                    totalRate={40}
                    id={product.id.toString()}
                    key={product.id}
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
