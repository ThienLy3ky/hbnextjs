export default function SwitchText(props: any) {
  return (
    <div
      className="btn-group btn-toggle btn-switch"
      onClick={() => props.change(!props.status)}
    >
      <button
        className={
          props.status ? "btn btn-lg btn-primary " : "btn btn-lg btn-default"
        }
      >
        {props.left}
      </button>
      <button
        className={
          !props.status ? "btn btn-lg btn-primary " : "btn btn-lg btn-default"
        }
      >
        {props.right}
      </button>
    </div>
  );
}
