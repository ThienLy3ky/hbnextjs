import { Slider } from "@mui/material";
import { useState } from "react";

export default function FilterClient({ option }: any) {
  const [type, setType] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [price, setPrice] = useState([1000, 1000000]);
  console.log("🚀 ~ file: filter-client.tsx:8 ~ FilterClient ~ price:", price);
  const { types, categories } = option;
  function valueLabelFormat(value: number) {
    const units = ["Đ", "K", "M"];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1000 && unitIndex < units.length - 1) {
      unitIndex += 1;
      scaledValue /= 1000;
    }

    return `${scaledValue} ${units[unitIndex]}`;
  }
  return (
    <div
      className="col-lg-3 col-md-4"
      style={{
        paddingTop: "9px",
        height: "fit-content",
      }}
    >
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Lọc theo giá</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={price ?? [0, 0]}
            min={1000}
            step={1000}
            max={5000000}
            valueLabelFormat={valueLabelFormat}
            onChange={({ target }: any) => setPrice(target?.value)}
            valueLabelDisplay="on"
          />
        </div>
      </div>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Lọc theo loại</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="type-all"
            checked={!(type && type.length > 0)}
            onChange={() => setType([])}
          />
          <label className="custom-control-label" htmlFor="type-all">
            Tất cả
          </label>
          <span className="badge border font-weight-normal">1000</span>
        </div>
        {types?.map((item: any, index: number) => (
          <div
            key={index}
            className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id={item?._id}
              checked={type?.includes(item.code)}
              onChange={({ target }) =>
                target.checked
                  ? setType([...type, item.code])
                  : setType(type?.filter((type: string) => item.code !== type))
              }
            />
            <label className="custom-control-label" htmlFor={item._id}>
              {item.name}
            </label>
          </div>
        ))}
      </div>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Lọc theo danh mục</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="category-all"
            checked={!(category && category.length > 0)}
            onChange={() => setCategory([])}
          />
          <label className="custom-control-label" htmlFor="category-all">
            Tất cả
          </label>
          <span className="badge border font-weight-normal">1000</span>
        </div>
        {categories?.map((item: any, index: number) => (
          <div
            key={index}
            className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id={item?._id}
              checked={category?.includes(item.code)}
              onChange={({ target }) =>
                target.checked
                  ? setCategory([...category, item.code])
                  : setCategory(
                      category?.filter(
                        (category: string) => item.code !== category
                      )
                    )
              }
            />
            <label className="custom-control-label" htmlFor={item._id}>
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
