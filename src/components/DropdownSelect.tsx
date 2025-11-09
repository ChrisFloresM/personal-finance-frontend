import IconCaretDown from "./Icons/IconCaretDown.tsx";
import {
  Field,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { type PropsWithChildren, useState } from "react";
import type { ISelectOption } from "../features/transactions/SearchAndFilter.tsx";

interface ISelectProps {
  label: string;
  options: ISelectOption[];
}

function DropdownSelect({
  label,
  options,
  children,
}: PropsWithChildren<ISelectProps>) {
  const [selectedOption, setSelectedOption] = useState<ISelectOption>(
    options[0],
  );

  function renderOptions() {
    return options.map((option) => (
      <ListboxOption
        key={option.value}
        value={option}
        className={({ selected }) =>
          `text-preset-4 text-grey-900 not-first:not-last:py-150 first:pb-150 last:pt-150 hover:cursor-pointer hover:font-bold ${selected ? "font-bold" : ""} `
        }
      >
        {option.label}
      </ListboxOption>
    ));
  }

  return (
    <Field className="flex items-center gap-100">
      <label className="text-preset-4 leading-preset-4 text-grey-500 hidden text-nowrap md:block">
        {label}:
      </label>

      {/* Mobile view */}
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <ListboxButton className="md:hidden">{children}</ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="border-grey-900 divide-grey-100 w-[176px] divide-y-1 rounded-[8px] border-1 bg-white px-250 py-150 [--anchor-gap:4px] md:w-(--button-width)"
        >
          {renderOptions()}
        </ListboxOptions>
      </Listbox>

      {/* Tablet+ view */}
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <ListboxButton className="border-beige-500 text-beige-500 text-preset-4 leading-preset-4 hover:text-grey-900 focus:text-grey-900 focus:border-grey-900 hidden w-full min-w-[176px] appearance-none items-center justify-between rounded-[8px] border-1 px-250 py-150 hover:cursor-pointer focus:outline-none md:flex">
          <span>{selectedOption.label}</span>
          <IconCaretDown size={16} />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="border-grey-900 divide-grey-100 w-[176px] divide-y-1 rounded-[8px] border-1 bg-white px-250 py-150 [--anchor-gap:4px] md:w-(--button-width)"
        >
          {renderOptions()}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
}

export default DropdownSelect;
