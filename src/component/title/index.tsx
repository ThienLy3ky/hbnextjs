import Link from "next/link";

export default function Title(props: any) {
  const { nameLink, namePage } = props;
  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            {nameLink?.link === "/" ? (
              <a className="breadcrumb-item text-dark" href={nameLink?.link}>
                {nameLink?.name}
              </a>
            ) : (
              <Link className="breadcrumb-item text-dark" href={nameLink?.link}>
                {nameLink?.name}
              </Link>
            )}
            <span className="breadcrumb-item active">{namePage}</span>
          </nav>
        </div>
      </div>
    </div>
  );
}
