export default function DropdownMenu(props: any) {
  const { data, onClick } = props;
  return (
    <nav
      className="collapse position-absolute navbar-vertical navbar-light align-items-start p-0 bg-light"
      id="navbar-vertical"
      style={{ zIndex: "999", width: "max-content" }}
    >
      <div className="navbar-nav w-100">
        {data?.map((category: any) => (
          <a
            key={category._id}
            onClick={() => onClick(category._id)}
            className="nav-item nav-link dropdown-item-a"
          >
            {category.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
