import catagories from "@/src/config/category.json";
export default function Categories() {
  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Thể loại</span>
      </h2>
      <div className="row px-xl-5 pb-3">
        {catagories?.map((category) => (
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={category?.id}>
            <a
              className="text-decoration-none"
              href={`shops/categories=${category.name}`}
            >
              <div className="cat-item d-flex align-items-center mb-4">
                <div
                  className="overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img className="img-fluid" src={category?.image} alt="" />
                </div>
                <div className="flex-fill pl-3">
                  <h6>{category?.name}</h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
