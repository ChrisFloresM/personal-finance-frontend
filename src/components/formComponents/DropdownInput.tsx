import {
  Field,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import IconCaretDown from "../Icons/IconCaretDown.tsx";
import type { ISelectOption } from "../../features/transactions/SearchAndFilter.tsx";
import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
  type PathValue,
} from "react-hook-form";

interface IDropdownInputProps<T extends FieldValues> {
  options: ISelectOption[];
  isColorMenu?: boolean;
  name: FieldPath<T>;
  control: Control<T>;
  defaultValue?: PathValue<T, FieldPath<T>>;
}

function DropdownInput<T extends FieldValues>({
  options,
  isColorMenu = false,
  name,
  control,
  defaultValue,
}: IDropdownInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <Field className="flex flex-col gap-100">
          <label className="text-preset-5 leading-preset-5 text-grey-500 block font-bold">
            Category:
          </label>
          <Listbox value={field.value} onChange={field.onChange}>
            <ListboxButton className="border-beige-500 text-beige-500 text-preset-4 leading-preset-4 hover:text-grey-900 focus:text-grey-900 focus:border-grey-900 flex w-full appearance-none items-center justify-between rounded-lg border px-250 py-150 hover:cursor-pointer focus:outline-none md:min-w-44">
              <span className="flex items-center gap-100">
                {isColorMenu && (
                  <ColorIcon value={field.value ?? options[0].value} />
                )}
                <span>
                  {options.find((opt) => opt.value === field.value)?.label ||
                    options[0].label}
                </span>
              </span>
              <IconCaretDown size={16} />
            </ListboxButton>
            <ListboxOptions
              anchor="bottom"
              className="border-grey-900 divide-grey-100 z-100 w-44 divide-y rounded-lg border bg-white px-250 py-150 [--anchor-gap:4px] md:w-(--button-width)"
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option.value}
                  className={({ selected }) =>
                    `text-preset-4 text-grey-900 flex items-center gap-100 not-first:not-last:py-150 first:pb-150 last:pt-150 hover:cursor-pointer hover:font-bold ${selected ? "font-bold" : ""} `
                  }
                >
                  {isColorMenu && <ColorIcon value={option.value} />}
                  <span>{option.label}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
          {fieldState.error && (
            <span className="text-preset-5 leading-preset-5 text-red-500">
              Error on this selection: {fieldState.error.message}{" "}
            </span>
          )}
        </Field>
      )}
    />
  );
}

interface IColorIconProps {
  value: string;
}

function ColorIcon({ value }: IColorIconProps) {
  const style = {
    backgroundColor: value,
  };

  return (
    <span style={style} className="block h-[15px] w-[15px] rounded-full"></span>
  );
}

export default DropdownInput;
