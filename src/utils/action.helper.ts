export const ChangePage = (
  value: string,
  currentPage: number,
  pages: number
) => {
  switch (value) {
    case "next":
      if (currentPage < pages) return currentPage + 1;
      break;
    case "previous":
      if (currentPage > 1) return currentPage - 1;
      break;
    case "finally":
      if (currentPage < pages) return pages;
      break;
    case "firstly":
      if (currentPage > 1) return 1;
      break;
    default:
      break;
  }
  return currentPage;
};
// export const changeIds = (
//   ids,
//   checked,
//   isDelete,
//   idDelete,
//   idDeleteAll,
//   dataID,
//   datas
// ) => {
//   if (isDelete) {
//     idDelete?.length === datas?.length - 1 && checked
//       ? (idDeleteAll = true)
//       : (idDeleteAll = false);
//     checked ? (idDelete = [...idDelete, ids]) : removeItem(idDelete, ids);
//   }
//   dataID = datas.filter(({ id }) => id.toString() === ids)[0];
//   return { deleted: idDelete, deleteAll: idDeleteAll, dataID };
// };
// export const changeCode = (
//   ids,
//   checked,
//   isDelete,
//   idDelete,
//   idDeleteAll,
//   dataID,
//   datas
// ) => {
//   if (isDelete) {
//     idDelete?.length === datas?.length - 1 && checked
//       ? (idDeleteAll = true)
//       : (idDeleteAll = false);
//     checked ? (idDelete = [...idDelete, ids]) : removeItem(idDelete, ids);
//   }
//   dataID = datas.filter(({ code }) => code.toString() === ids)[0];
//   return { deleted: idDelete, deleteAll: idDeleteAll, dataID };
// };
export const removeItem = (arr: string[], value: string) => {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};
export const formatMoney = (money: number) => {
  return money.toLocaleString("zh-HK", {
    style: "currency",
    currency: "VND",
  });
};
// export const formatNumber = (value: number) => {
//   return parseInt(value.replace(/([\Wa-zA-Z])/g, "")) > 0
//     ? parseInt(value.replace(/([\Wa-zA-Z])/g, ""))
//     : 0;
// };
