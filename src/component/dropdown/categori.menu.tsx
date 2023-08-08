export default function DropdownMenu(props: any) {
  const { data } = props;
  return (
    <nav
      className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
      id="navbar-vertical"
      style={{ zIndex: "999", width: "max-content" }}
    >
      <div className="navbar-nav w-100">
        {data?.map((category: any) => (
          <a
            key={category.id}
            href={`/shops?group=${category.name}`}
            className="nav-item nav-link dropdown-item-a"
          >
            {category.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
