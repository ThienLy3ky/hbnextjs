import CardProductShort from "component/card/card.product.short";
import TitlePage from "component/title";
import products from "config/MOCK_DATA.product.json";
import Pagination from "./pagination";
import SortClient from "./sort";
import FilterClient from "./filter";
export default function Shops() {
  return (
    <div>
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
                <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
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
    </div>
  );
}
