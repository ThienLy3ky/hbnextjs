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

type Order = "asc" | "desc";

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
  sort: boolean;
}

function EnhancedTableHead(props: any) {
  const {
    option,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  return (
    <TableHead style={{ background: "#ccccf3" }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {option?.map((headCell: HeadCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.sort ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={() => console.log("sort")}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
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
      </TableRow>
    </TableHead>
  );
}
interface IProps {
  rows: Object[];
  header: HeadCell[];
  order: { order: string; orderBy: string };
  page: number;
  limit: number;
  setOder: Function;
  setLimit: Function;
  setPage: Function;
  pageSum: number;
}
export default function EnhancedTable(props: IProps) {
  const {
    rows,
    header,
    order,
    page,
    limit,
    setLimit,
    setOder,
    setPage,
    pageSum,
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
              order={order?.order}
              orderBy={order?.orderBy}
              onSelectAllClick={() => console.log("sort")}
              onRequestSort={() => console.log("sort")}
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
                    onClick={(event) => console.log(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    {header?.map((val, index) => {
                      return (
                        //
                        <TableCell
                          align={index === 0 ? "left" : "right"}
                          key={index}
                        >
                          {row[val.id]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={pageSum}
          rowsPerPage={limit}
          page={page}
          onPageChange={(e) => setPage(e)}
          onRowsPerPageChange={(e) => setLimit(e)}
        />
      </Paper>
    </Box>
  );
}
