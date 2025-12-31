import ModalPopoverOptionsButton from "../../components/ModalPopoverOptionsButton.tsx";

interface IPotHeadingProps {
  name: string;
  theme: string;
}

function PotHeading({ name, theme }: IPotHeadingProps) {
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
      <ModalPopoverOptionsButton />
    </div>
  );
}

export default PotHeading;
