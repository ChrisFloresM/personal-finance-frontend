import { createContext, type PropsWithChildren, useState } from "react";

interface IModalContext {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const initialContext: IModalContext = {
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext<IModalContext>(initialContext);

function ModalContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ isOpen, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
