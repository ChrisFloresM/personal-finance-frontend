import { createContext, type PropsWithChildren, useState } from "react";
import * as React from "react";

interface IModalContext {
  isOpen: boolean;
  content: React.ReactNode;
  handleOpen: (renderContent: React.ReactNode) => void;
  handleClose: () => void;
}

const initialContext: IModalContext = {
  isOpen: false,
  content: null,
  handleOpen: () => {},
  handleClose: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext<IModalContext>(initialContext);

function ModalContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  function handleOpen(renderContent: React.ReactNode) {
    setIsOpen(true);
    setContent(renderContent);
  }

  function handleClose() {
    setIsOpen(false);
    setContent(null);
  }

  return (
    <ModalContext.Provider value={{ isOpen, content, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
