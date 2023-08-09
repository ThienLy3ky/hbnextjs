import React from "react";
import ItemMenuAdmin from "../items/menu.admin.item";

export function MenuAdmin() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-around fixed-top">
        <a className="brand-logo">HB shops</a>
        <a className="">
          <button
            className="navbar-toggler navbar-toggler align-self-center menu-btn 
            "
            style={{ padding: 0 }}
            type="button"
            data-toggle="minimize"
          >
            <i className="mdi mdi-menu-left"></i>
          </button>
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item nav-category">
          <span className="nav-link">Navigation</span>
        </li>
        <ItemMenuAdmin
          name="cong ty"
          link="bills"
          icon={<i className="mdi mdi-speedometer"></i>}
        />
        <ItemMenuAdmin
          name="San pham"
          link="products"
          icon={<i className="mdi mdi-speedometer"></i>}
        />
        <ItemMenuAdmin
          name="cong ty"
          link="company"
          icon={<i className="mdi mdi-speedometer"></i>}
        />
        <ItemMenuAdmin
          name="cong ty"
          link="category"
          icon={<i className="mdi mdi-speedometer"></i>}
        />
        <ItemMenuAdmin
          name="cong ty"
          link="size-product"
          icon={<i className="mdi mdi-speedometer"></i>}
        />
        <ItemMenuAdmin
          name="cong ty"
          link="type-product"
          icon={<i className="mdi mdi-speedometer"></i>}
        />
        <ItemMenuAdmin
          name="cong ty"
          link="setting"
          icon={<i className="mdi mdi-speedometer"></i>}
        />
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
