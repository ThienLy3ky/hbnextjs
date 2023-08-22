import { toast } from "react-toastify";

export const showNotificationError = (errorMessage = "") => {
  toast.error(errorMessage, {
    hideProgressBar: true,
    autoClose: 5000,
    position: "bottom-right",
  });
};

export const showNotificationSuccess = (message = "") => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
