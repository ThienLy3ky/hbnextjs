import { Slider } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FilterClient({ option, query, setQuery }: any) {
  const router = useRouter();
  let type: string[] = query?.type ?? [];
  let category: string[] = query?.categories ?? [];
  let company: string[] = query?.company ?? [];
  const [price, setPrice] = useState(query?.price ?? [1000, 1000000]);
  const { types, categories, companies } = option;
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
  const handleChangeType = (checked: boolean, value: string) => {
    type = checked
      ? [...type, value]
      : type?.filter((type: string) => value !== type);
    router.replace({
      query: { ...router.query, type: JSON.stringify(type) },
    });
  };
  const handleChangeCategories = (checked: boolean, value: string) => {
    category = checked
      ? [...category, value]
      : category?.filter((catego: string) => value !== catego);
    router.replace({
      query: { ...router.query, categories: JSON.stringify(category) },
    });
  };
  const handleChangeCompany = (checked: boolean, value: string) => {
    company = checked
      ? [...company, value]
      : company?.filter((compa: string) => value !== compa);
    router.replace({
      query: { ...router.query, company: JSON.stringify(company) },
    });
  };
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
            onChange={({ target }: any) => setPrice(target.value)}
            onChangeCommitted={() => setQuery({ ...query, price })}
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
            onChange={() =>
              router.replace({
                query: { ...router.query, type: "" },
              })
            }
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
              checked={type?.includes(item._id)}
              onChange={({ target }) =>
                handleChangeType(target?.checked, item._id)
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
            onChange={() =>
              router.replace({
                query: { ...router.query, categories: "" },
              })
            }
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
              checked={category?.includes(item._id)}
              onChange={({ target }) =>
                handleChangeCategories(target?.checked, item._id)
              }
            />
            <label className="custom-control-label" htmlFor={item._id}>
              {item.name}
            </label>
          </div>
        ))}
      </div>
      <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Lọc theo Công Ty</span>
      </h5>
      <div className="bg-light p-4 mb-30">
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="company-all"
            checked={!(company && company.length > 0)}
            onChange={() =>
              router.replace({
                query: { ...router.query, categories: "" },
              })
            }
          />
          <label className="custom-control-label" htmlFor="company-all">
            Tất cả
          </label>
          <span className="badge border font-weight-normal">1000</span>
        </div>
        {companies?.map((item: any, index: number) => (
          <div
            key={index}
            className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id={item?._id}
              checked={company?.includes(item._id)}
              onChange={({ target }) =>
                handleChangeCompany(target?.checked, item._id)
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
