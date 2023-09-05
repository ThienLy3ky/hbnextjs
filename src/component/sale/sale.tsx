export default function Sale(props: any) {
  const { data } = props;
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="row px-xl-5">
        {data?.map((item: any) => {
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <img className="img-fluid" src="/image/img/offer-1.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>;
        })}
        <div className="col-md-6">
          <div className="product-offer mb-30" style={{ height: "300px" }}>
            <img className="img-fluid" src="/image/img/offer-2.jpg" alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
