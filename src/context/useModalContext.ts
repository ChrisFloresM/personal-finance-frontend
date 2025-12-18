/* Custom hook */
import { useContext } from "react";
import { ModalContext } from "./ModalContextProvider.tsx";

export function useModalContext() {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("GameContext must be used within the GameContext");
  }

  return modalContext;
}
