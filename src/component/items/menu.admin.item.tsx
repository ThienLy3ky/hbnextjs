import Link from "next/link";

export default function ItemMenuAdmin(props: any) {
  return (
    <li className="nav-item menu-items">
      <Link className="nav-link" href={props.link}>
        <span className="menu-icon">{props.icon}</span>
        <span className="menu-title">{props.name}</span>
      </Link>
    </li>
  );
}
