import { CloseButton } from "@headlessui/react";

interface PopoverMenuOptionProps {
  type: "normal" | "danger";
  content: string;
  onClick: () => void;
}

function PopoverMenuOption({ type, content, onClick }: PopoverMenuOptionProps) {
  return (
    <CloseButton
      onClick={onClick}
      className={`${type === "normal" ? "text-grey-900" : "text-red"} hover:bg-beige-500 w-full px-250 py-150 font-bold hover:cursor-pointer`}
    >
      {content}
    </CloseButton>
  );
}

export default PopoverMenuOption;
