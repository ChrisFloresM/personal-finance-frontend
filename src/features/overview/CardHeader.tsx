import type { PropsWithChildren } from "react";
import IconCaretRight from "../../components/Icons/IconCaretRight.tsx";
import { useNavigate } from "react-router";

interface ICardHeaderProps {
  btnText: string;
  navigatePath: string;
}

function CardHeader({
  btnText,
  navigatePath,
  children,
}: PropsWithChildren<ICardHeaderProps>) {
  const navigate = useNavigate();

  function navigateFn() {
    navigate(navigatePath);
  }

  return (
    <div className="flex w-full items-center justify-between">
      <h2 className="text-grey-900 text-preset-2 leading-preset-2 font-bold">
        {children}
      </h2>
      <button
        className="group text-preset-4 leading-preset-4 text-grey-500 outline-grey-500 relative flex items-center gap-100 hover:cursor-pointer"
        onClick={navigateFn}
      >
        <span>{btnText}</span>
        <span>
          <IconCaretRight size={12} />
        </span>
        <span className="bg-grey-500 absolute bottom-0 h-[1px] w-0 transition-all duration-200 group-hover:w-full"></span>
      </button>
    </div>
  );
}

export default CardHeader;
