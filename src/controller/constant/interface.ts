export interface hederTable {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  sort: boolean;
  align: "left" | "right" | "center";
  label: string;
}
