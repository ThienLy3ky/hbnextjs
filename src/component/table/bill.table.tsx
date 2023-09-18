import * as React from "react";
import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Checkbox,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import SwitchText from "../switch/swittch.text";

type Order = "asc" | "desc";
type Align = "right" | "left" | "center";
interface HeadCell {
  disablePadding: boolean;
  id: string;
  idChil?: string;
  label: string;
  align: Align;
  numeric: boolean;
  sort: boolean;
}
const StatusBill = ["Cancel", "Pendding", "Processing", "Shipping", "complete"];
function EnhancedTableHead(props: any) {
  const { option, onSelectAllClick, order, numSelected, rowCount, setOder } =
    props;

  return (
    <TableHead style={{ background: "#ccccf3" }}>
      <TableRow>
        {option?.map((headCell: HeadCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={order.orderBy === headCell.id ? order.order : false}
          >
            {headCell.sort ? (
              <TableSortLabel
                active={order.orderBy === headCell.id}
                direction={order.orderBy === headCell.id ? order.order : "asc"}
                onClick={(e) => {
                  setOder ? setOder({ ...order, orderBy: headCell.id }) : "";
                }}
              >
                {headCell.label}
                {order.orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order.order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
        <TableCell align="right" padding="normal">
          Hành động
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
interface IProps {
  rows: Object[];
  header: HeadCell[];
  order: { order: string; orderBy: string };
  page?: number;
  limit?: number;
  setOder: Function;
  setLimit: Function;
  setPage: Function;
  onDelete: Function;
  onUpdate: Function;
  pageSum?: number;
  isDeleted: boolean;
  isUpdate: boolean;
  isPagination: boolean;
  changeStatus: any;
  changePayment: any;
}
export default function EnhancedTableBill(props: IProps) {
  const {
    rows,
    header,
    order,
    page = 1,
    limit,
    setLimit,
    setOder,
    setPage,
    pageSum,
    isDeleted,
    isUpdate,
    onDelete,
    isPagination,
    onUpdate,
    changePayment,
    changeStatus,
  } = props;
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              setOder={rows.length ? setOder : false}
              // onSelectAllClick={() => console.log("sort")}
              // onRequestSort={() => console.log("sort")}
              rowCount={rows?.length}
              option={header}
            />
            <TableBody>
              {rows?.map((row: any, index: number) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    // onClick={(event) => console.log(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name | index}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    {header?.map((val, index) => {
                      return (
                        //

                        <TableCell
                          align={index === 0 ? "left" : val?.align}
                          key={index}
                        >
                          {val.id === "status" ? (
                            <button className="btn btn-success">
                              {StatusBill[row[val.id]]}
                            </button>
                          ) : val.id === "wasPayment" ? (
                            <SwitchText
                              status={row[val.id]}
                              left={<i className="fa fa-check"></i>}
                              right={<i className="mdi mdi-close"></i>}
                              change={changePayment}
                            />
                          ) : (
                            row[val.id]
                          )}
                        </TableCell>
                      );
                    })}
                    <TableCell align="right" className="pt-0 pr-1 pb-0">
                      {isDeleted ? (
                        <button
                          className="p-2 border-0 col-3 btn-edit"
                          onClick={() => onUpdate(row)}
                        >
                          <i className="mdi mdi-information"></i>
                        </button>
                      ) : (
                        ""
                      )}
                      {isUpdate ? (
                        <button
                          className="p-2 border-0 col-3 btn-delete"
                          onClick={() => onDelete(row._id)}
                        >
                          <i className="mdi mdi-delete"></i>
                        </button>
                      ) : (
                        ""
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {isPagination ? (
          <TablePagination
            className="m-0"
            rowsPerPageOptions={[1, 5, 10, 20, 50, 100]}
            component="div"
            count={pageSum || 0}
            rowsPerPage={limit || 0}
            page={page - 1}
            labelRowsPerPage="Page"
            onPageChange={(e, page) => setPage(e, page)}
            onRowsPerPageChange={(e) => setLimit(e.target.value)}
          />
        ) : (
          ""
        )}
      </Paper>
    </Box>
  );
}
