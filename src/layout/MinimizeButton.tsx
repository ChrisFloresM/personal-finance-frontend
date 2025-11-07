import IconMinimizeMenu from "../components/Icons/IconMinimizeMenu.tsx";

interface IMinimizeButtonProps {
  isCollapsed: boolean;
  onClick: () => void;
}

const textBaseClass =
  "text-preset-3 text-grey-300 font-bold transition-all duration-200 text-nowrap text-start" +
  " group-hover:text-white overflow-hidden";

function MinimizeButton({ isCollapsed, onClick }: IMinimizeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group text-grey-300 mb-300 hidden items-center gap-200 px-400 py-200 transition-colors duration-200 hover:cursor-pointer hover:text-white lg:flex"
      type="button"
      aria-controls="nav-menu"
      aria-expanded={!isCollapsed}
    >
      <div
        className={`transition-all duration-200 ${isCollapsed ? "rotate-180" : "rotate-0"}`}
      >
        <IconMinimizeMenu size={24} />
      </div>
      <span
        className={`${textBaseClass} ${isCollapsed ? "w-[0]" : "w-[180px]"}`}
      >
        Minimize Menu
      </span>
    </button>
  );
}

export default MinimizeButton;
