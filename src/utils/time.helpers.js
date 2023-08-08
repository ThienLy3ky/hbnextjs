export const formatTime = (date) => {
  if (!date) return "";
  return moment(date).format("h:mm:ss a");
};

export const formatDate = (date) => {
  if (!date) return "";
  return moment(date).format("DD MMM YYYY");
};

export const formatDateWithMonthAndYear = (date) => {
  if (!date) return "";
  return moment(date).format("MM YYYY");
};
