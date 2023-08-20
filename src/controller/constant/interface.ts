export interface hederTable {
  id: string;
  idChil?: string;
  numeric: boolean;
  disablePadding: boolean;
  sort: boolean;
  align: "left" | "right" | "center";
  label: string;
}
