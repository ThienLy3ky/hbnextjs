import React from "react";
import ItemMenuAdmin from "../items/menu.admin.item";
import { useRouter } from "next/router";
export function MenuAdmin() {
  const menu = [
    {
      name: "Đơn hàng",
      link: "/manager/bills",
      icon: <i className="mdi mdi-file-document"></i>,
    },
    {
      name: "Slide",
      link: "/manager/banner",
      icon: <i className="mdi mdi-film"></i>,
    },
    {
      name: "Mặt hàng",
      link: "/manager/products",
      icon: <i className="mdi mdi-pharmacy"></i>,
    },
    {
      name: "Công Ty",
      link: "/manager/company",
      icon: <i className="mdi mdi-factory"></i>,
    },
    {
      name: "Kích thước",
      link: "/manager/size-product",
      icon: <i className="mdi mdi-package-variant"></i>,
    },
    {
      name: "Loại mặt hàng",
      link: "/manager/type-product",
      icon: <i className="mdi mdi-dropbox"></i>,
    },
    {
      name: "Danh mục mặt hàng",
      link: "/manager/category",
      icon: <i className="mdi mdi-format-list-bulleted-type"></i>,
    },
    {
      name: "Kiểu dáng mặt hàng",
      link: "/manager/styles-product",
      icon: <i className="mdi mdi-palette"></i>,
    },
    {
      name: "Nhóm mặt hàng",
      link: "/manager/group-product",
      icon: <i className="mdi mdi-ungroup"></i>,
    },
    {
      name: "Quản lý sale",
      link: "/manager/sale",
      icon: <i className="mdi mdi-percent"></i>,
    },
    {
      name: "Cài đặt chung",
      link: "/manager/setting",
      icon: <i className="mdi mdi-settings"></i>,
    },
  ];
  const router = useRouter().route;

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-around">
        <a className="brand-logo">HB shops</a>
        <a className="">
          <button
            className="navbar-toggler align-self-center menu-btn 
            "
            style={{ padding: 0 }}
            type="button"
            data-toggle="minimize"
          >
            <i className="mdi mdi-menu-left"></i>
          </button>
        </a>
      </div>
      <ul className="nav pt-0">
        <li className="nav-item nav-category">
          <span className="nav-link">Navigation</span>
        </li>
        {menu.map(({ name, link, icon }, index) => (
          <ItemMenuAdmin
            key={index}
            name={name}
            active={link === router}
            link={link}
            icon={icon}
          />
        ))}

        <li className="nav-item menu-items">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span className="menu-icon">
              <i className="mdi mdi-laptop"></i>
            </span>
            <span className="menu-title">Basic UI Elements</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/ui-features/buttons.html">
                  Buttons
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/ui-features/dropdowns.html">
                  Dropdowns
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  href="pages/ui-features/typography.html"
                >
                  Typography
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
