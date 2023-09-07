export default function Sale(props: any) {
  const { data } = props;
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="row px-xl-5">
        {data?.map((item: any) => {
          <div className="col-md-4">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <img
                className="img-fluid"
                src={item.image ?? "/static/image/noImage.jpeg"}
                alt=""
              />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">{item.title}</h6>
                <h3 className="text-white mb-3">{item?.content}</h3>
                <a href="/shops" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
