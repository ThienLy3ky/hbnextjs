import EnhancedTable from "@/src/component/table/table.mui";
import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
export default function ModalAdmin(props: any) {
  return (
    <Modal
      style={{ overflow: "auto" }}
      open={props.openModal}
      onClose={props.onclose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Fade in={props.openModal}>
        <div
          className="modal-dialog pt-0 mt-0 modal-lg col-md-8 col-sm-10"
          style={{ maxWidth: "800px !important" }}
          role="document"
        >
          <div className="modal-content">{props.children}</div>
        </div>
      </Fade>
    </Modal>
  );
}
