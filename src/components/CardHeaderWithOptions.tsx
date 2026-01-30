import PopoverMenu from "./PopoverMenu.tsx";
import PopoverMenuOption from "./PopoverMenuOption.tsx";

interface ICardHeadingProps {
  name: string;
  theme: string;
  handleOpenEdit: () => void;
  handleOpenDelete: () => void;
}

function CardHeaderWithOptions({
  name,
  theme,
  handleOpenEdit,
  handleOpenDelete,
}: ICardHeadingProps) {
  return (
    <div className="flex w-full justify-between">
      <h2 className="flex items-center gap-200">
        <span
          className="bg-green inline-block h-200 w-200 rounded-full"
          style={{ backgroundColor: theme }}
        ></span>
        <span className="text-grey-900 text-preset-2 leading-preset-2 font-bold">
          {name}
        </span>
      </h2>
      <PopoverMenu>
        <PopoverMenuOption
          type="normal"
          content="Edit"
          onClick={handleOpenEdit}
        />
        <PopoverMenuOption
          type="danger"
          content="Delete"
          onClick={handleOpenDelete}
        />
      </PopoverMenu>
    </div>
  );
}

export default CardHeaderWithOptions;
