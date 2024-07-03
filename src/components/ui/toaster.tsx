import { Link } from "react-router-dom";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useToast } from "./use-toast";
import { GrCreditCard } from "react-icons/gr";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        imgSrc,
        buttonText,
        redirectTo,
        action,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-1 w-full">
              {imgSrc && title && (
                <div className="w-20 h-20 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-full hover:drop-shadow-lg"
                  />
                </div>
              )}
              <div className="flex flex-col gap-1 w-full">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
                {buttonText && redirectTo && (
                  <Link
                    to={redirectTo}
                    className="button-green w-full px-8 py-2 flex-center gap-2"
                  >
                    <GrCreditCard /> {buttonText}
                  </Link>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
