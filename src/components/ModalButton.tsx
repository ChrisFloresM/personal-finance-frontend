import { type PropsWithChildren } from "react";
import { useModalContext } from "../context/useModalContext.ts";
import ModalWindow from "./ModalWindow.tsx";
import ModalContextProvider from "../context/ModalContextProvider.tsx";

export type TVariation = "primary" | "secondary";

interface IAddButtonProps {
  buttonTitle: string;
  variation: TVariation;
}

interface IVariations {
  primary: string;
  secondary: string;
}

function ModalButton({
  buttonTitle,
  variation,
  children,
}: PropsWithChildren<IAddButtonProps>) {
  return (
    <ModalContextProvider>
      <ControlButton buttonTitle={buttonTitle} variation={variation}>
        {children}
      </ControlButton>
    </ModalContextProvider>
  );
}

function ControlButton({
  buttonTitle,
  variation,
  children,
}: PropsWithChildren<IAddButtonProps>) {
  const { isOpen, handleOpen } = useModalContext();

  const variations: IVariations = {
    primary: "bg-grey-900 hover:bg-grey-500 text-white",
    secondary:
      "bg-beige-100 hover:bg-transparent text-grey-900 hover:outline-1" +
      " hover:outline-grey-500",
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={`${variations[variation || "primary"]} text-preset-4 leading-preset-4 w-full rounded-lg p-200 font-bold transition-colors duration-200 hover:cursor-pointer`}
      >
        {buttonTitle}
      </button>
      {isOpen && <ModalWindow>{children}</ModalWindow>}
    </>
  );
}
export default ModalButton;
