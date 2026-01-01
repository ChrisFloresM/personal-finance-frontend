import { useModalContext } from "../context/useModalContext.ts";
import IconCloseModal from "./Icons/IconCloseModal.tsx";

function ModalWindow() {
  const { content, handleClose } = useModalContext();

  if (content === null) {
    return;
  }

  return (
    <div className="fixed inset-0 z-10 flex h-full w-full cursor-default items-center justify-center bg-black/50 px-250">
      <div className="relative flex w-full max-w-[560px] flex-col items-center justify-center rounded-xl bg-white px-250 py-300">
        <button
          className="hover:text-grey-500 absolute top-300 right-250 hover:cursor-pointer"
          type="button"
          onClick={handleClose}
        >
          <IconCloseModal size={32} />
        </button>
        {content}
      </div>
    </div>
  );
}

export default ModalWindow;
