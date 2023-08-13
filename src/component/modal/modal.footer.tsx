export default function FooterModal(props: any) {
  return (
    <div className="modal-footer">
      <button
        type="submit"
        className="btn btn-primary"
        onSubmit={props.onsubmit}
      >
        {props.save}
      </button>
      <button type="button" className="btn btn-erro" onClick={props.onCancel}>
        {props.cancel}
      </button>
    </div>
  );
}
