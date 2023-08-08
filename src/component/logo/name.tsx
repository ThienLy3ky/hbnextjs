export default function NameShop(props: any) {
  const { href, className, Style } = props;
  return (
    <a href={href} className={className} style={Style}>
      <span className="h1 text-uppercase text-dark bg-light px-2">HB</span>
      <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
        Shop
      </span>
    </a>
  );
}
