export default function HeadModal(props: any) {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{props.title}</h5>
      <button type="button" className="close" onClick={props.onclose}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
