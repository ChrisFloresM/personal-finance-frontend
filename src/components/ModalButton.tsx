import { type PropsWithChildren, useState } from "react";
import IconCloseModal from "./Icons/IconCloseModal.tsx";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

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
        className={`${variations[variation || "primary"]} text-preset-4 leading-preset-4 w-full rounded-[8px] p-200 font-bold transition-colors duration-200 hover:cursor-pointer`}
      >
        {buttonTitle}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 flex h-full w-full cursor-default items-center justify-center bg-black/50"
          onClick={handleClose}
        >
          <div className="relative flex h-1/2 w-1/2 flex-col items-center justify-center rounded-[12px] bg-white p-400">
            <button
              className="hover:text-grey-500 absolute top-400 right-400 hover:cursor-pointer"
              type="button"
              onClick={handleClose}
            >
              <IconCloseModal size={32} />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalButton;
