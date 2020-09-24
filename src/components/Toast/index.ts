import { toast } from "react-toastify";

const TypeToast = {
  success: "success",
  info: "info",
  warn: "warn",
  error: "error",
};

function toastComponent(type: string, message: string) {
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  } else if (type === "info") {
    toast.info(message);
  } else if (type === "warn") {
    toast.warn(message);
  }
}

const Toast = {
  success: (message: string) => toastComponent(TypeToast.success, message),
  info: (message: string) => toastComponent(TypeToast.info, message),
  warn: (message: string) => toastComponent(TypeToast.warn, message),
  error: (message: string) => toastComponent(TypeToast.error, message),
};

export default Toast;
