import InputRow from "@/src/component/input/input.row";
import ModalAdmin from "@/src/component/modal/modal.addUpdate";
import FooterModal from "@/src/component/modal/modal.footer";
import HeadModal from "@/src/component/modal/modal.head";
import EnhancedTable from "@/src/component/table/table.mui";
import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TypeModal(props: any) {
  const { title, openModal, onclose } = props;

  return (
    <ModalAdmin openModal={openModal} onclose={() => onclose(false)}>
      <form
        onSubmit={(event) => {
          console.log("data");
          event.preventDefault();
        }}
      >
        <HeadModal onclose={() => onclose(false)} title={title} />
        <div className="modal-body">
          <div className="col">
            <InputRow
              row={true}
              type="date"
              placeholder=""
              label="Ten"
              change={(e: any) => console.log(e)}
            />
            <InputRow
              row={true}
              type="file"
              placeholder=""
              label="text"
              change={(e: any) => console.log(e)}
            />
            <InputRow
              row={true}
              type="date"
              placeholder=""
              label="text"
              change={(e: any) => console.log(e)}
            />
            <InputRow
              row={true}
              type="date"
              placeholder=""
              label="text"
              change={(e: any) => console.log(e)}
            />
            <InputRow
              row={true}
              type="date"
              placeholder=""
              label="text"
              change={(e: any) => console.log(e)}
            />
          </div>
        </div>
        <FooterModal save="Luu" cancel="Huy" onCancel={() => onclose(false)} />
      </form>
    </ModalAdmin>
  );
}
