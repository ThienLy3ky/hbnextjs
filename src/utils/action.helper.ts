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
export function removeVietnameseTones(str: any) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    "-"
  );
  return str;
}
export class validateForm {
  static notNull(value: any) {
    if (value && value !== "") {
      return false;
    }
    return "Dữ liệu không dược rỗng";
  }
}

export class FormatData {
  static iName(data: any) {
    return data
      ?.toString()
      .replace(/ + /g, " ")
      .replace(/[$&+,:;=?@#|'<>.^*%!-]/g, "");
  }
}
type Order = "asc" | "desc";
// export class sort {
//   static descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//     if (b[orderBy] < a[orderBy]) {
//       return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//       return 1;
//     }
//     return 0;
//   }
//   static getComparator<Key extends keyof any>(
//     order: any,
//     orderBy: Key
//   ): (
//     a: { [key in Key]: number | string },
//     b: { [key in Key]: number | string }
//   ) => number {
//     return order === "desc"
//       ? (a, b) => this.descendingComparator(a, b, orderBy)
//       : (a, b) => -this.descendingComparator(a, b, orderBy);
//   }
//   static stableSort<T>(
//     array: readonly T[],
//     comparator: (a: T, b: T) => number
//   ) {
//     const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
//     stabilizedThis.sort((a, b) => {
//       const order = comparator(a[0], b[0]);
//       if (order !== 0) {
//         return order;
//       }
//       return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
//   }
//   static sortString(aray: object[], key: string) {
//     return aray.sort((a, b) => {
//       let fa = a[key].toLowerCase(),
//         fb = b[key].toLowerCase();

//       if (fa < fb) {
//         return -1;
//       }
//       if (fa > fb) {
//         return 1;
//       }
//       return 0;
//     });
//   }
// }
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
export const formatMoney = (money = 0) => {
  return money.toLocaleString("zh-HK", {
    style: "currency",
    currency: "VND",
  });
};
export const formatNumber = (value = "0") => {
  return parseInt(value.replace(/([\Wa-zA-Z])/g, "")) > 0
    ? parseInt(value.replace(/([\Wa-zA-Z])/g, ""))
    : 0;
};
export const formatString = (str: string) => {
  str = str.replace(/ + /g, " ");
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|\^|\*|\=|\<|\>|\?|\/|\;|\&|\#|\[|\]|~|\$|_|`|{|}|\||\\/g,
    " "
  );
  return str;
};
export const formatLinkString = (str: string) => {
  str = str.replace(/ + /g, " ");
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|\^|\*|\=|\<|\>|\?|\;|\&|\#|\[|\]|~|\$|_|`|{|}|\||\\/g,
    " "
  );
  return str;
};
export const setToken = (access_token: string) =>
  localStorage.setItem("Access_Token", JSON.stringify(access_token));
export const setReToken = (Re_token: string) =>
  localStorage.setItem("Refresh_Token", JSON.stringify(Re_token));
export const getToken = () => {
  try {
    return JSON.parse(localStorage.getItem("Access_Token") || "");
  } catch (error) {
    return "";
  }
};
export const getReToken = () => {
  try {
    return JSON.parse(localStorage.getItem("Refresh_Token") || "");
  } catch (error) {
    return "";
  }
};

export const clearToken = () => {
  try {
    return localStorage.removeItem("Access_Token");
  } catch (error) {
    return "";
  }
};
export const clearReToken = () => {
  try {
    return localStorage.removeItem("Refresh_Token");
  } catch (error) {
    return "";
  }
};

export const setRoler = (Re_token: string) =>
  localStorage.setItem("role", Re_token);
export const getRoler = () => {
  try {
    return localStorage.getItem("role") || "";
  } catch (error) {
    return "";
  }
};

export const clearRoler = () => {
  try {
    return localStorage.removeItem("role");
  } catch (error) {
    return "";
  }
};
