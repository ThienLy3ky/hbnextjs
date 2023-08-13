import { Snackbar } from "@mui/material";

export default function NotiAdmin(props: any) {
  const { vertical, horizontal, open, handleclose, mesage } = props;
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={true}
      autoHideDuration={5000}
      message={mesage}
      key={vertical + horizontal}
    />
  );
}
