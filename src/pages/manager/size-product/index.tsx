import AdminLayout from "@/src/component/layout/client.admin";
import EnhancedTable from "@/src/component/table/table.mui";
import { useState } from "react";

export default function Darboard() {
  const [order, setOrder] = useState<{ order: "asc"; orderBy: "" }>({
    order: "asc" || "desc",
    orderBy: "",
  });
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  interface Data {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
  }

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ): Data {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }

  const rows = [
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Donut", 452, 25.0, 51, 4.9),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Honeycomb", 408, 3.2, 87, 6.5),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Jelly Bean", 375, 0.0, 94, 0.0),
    createData("KitKat", 518, 26.0, 65, 7.0),
    createData("Lollipop", 392, 0.2, 98, 0.0),
    createData("Marshmallow", 318, 0, 81, 2.0),
    createData("Nougat", 360, 19.0, 9, 37.0),
    createData("Oreo", 437, 18.0, 63, 4.0),
  ];

  const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      sort: true,
      label: "Dessert (100g serving)",
    },
    {
      id: "calories",
      numeric: true,
      sort: true,
      disablePadding: false,
      label: "Calories",
    },
    {
      id: "fat",
      numeric: true,
      sort: true,
      disablePadding: false,
      label: "Fat (g)",
    },
    {
      id: "carbs",
      numeric: true,
      sort: false,
      disablePadding: false,
      label: "Carbs (g)",
    },
    {
      id: "protein",
      numeric: true,
      sort: true,
      disablePadding: false,
      label: "Protein (g)",
    },
    {
      id: "hhh",
      numeric: true,
      sort: true,
      disablePadding: false,
      label: "Protein (g)",
    },
  ];
  return (
    <AdminLayout>
      <EnhancedTable
        header={headCells}
        rows={rows}
        page={1}
        order={order}
        limit={10}
        setLimit={setLimit}
        setPage={setPage}
        setOder={setOrder}
        pageSum={100}
      />
    </AdminLayout>
  );
}
