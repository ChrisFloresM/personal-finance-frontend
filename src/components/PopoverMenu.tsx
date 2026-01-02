import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { type PropsWithChildren } from "react";

function PopoverMenu({ children }: PropsWithChildren) {
  return (
    <Popover className="relative">
      <PopoverButton className="hover:cursor-pointer">...</PopoverButton>
      <PopoverPanel
        transition
        className="text-preset-4 leading-preset-4 absolute top-full right-full overflow-hidden rounded-lg bg-white duration-100 data-closed:scale-95 data-closed:opacity-0"
      >
        {children}
      </PopoverPanel>
    </Popover>
  );
}

export default PopoverMenu;
