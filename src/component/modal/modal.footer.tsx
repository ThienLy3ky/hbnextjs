export default function FooterModal(props: any) {
  return (
    <div className="modal-footer">
      <input type="submit" className="btn btn-primary" value={props.save} />
      <button type="button" className="btn btn-erro" onClick={props.onCancel}>
        {props.cancel}
      </button>
    </div>
  );
}
