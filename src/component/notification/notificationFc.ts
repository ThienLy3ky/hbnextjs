import { toast } from "react-toastify";

export const showNotificationError = (errorMessage = "") => {
  console.log(
    "🚀 ~ file: notificationFc.ts:4 ~ showNotificationError ~ errorMessage:",
    errorMessage
  );
  toast.error(errorMessage[0], {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
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
