import { CircularProgress } from "@mui/material";

export default function FooterModal(props: any) {
  return (
    <div className="modal-footer">
      {props.loading ? (
        <button type="submit" className="btn btn-primary">
          <CircularProgress color="warning" />
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-primary"
          onClick={props.onsubmit}
        >
          {props.save}
        </button>
      )}
      <button type="button" className="btn btn-erro" onClick={props.onCancel}>
        {props.cancel}
      </button>
    </div>
  );
}
