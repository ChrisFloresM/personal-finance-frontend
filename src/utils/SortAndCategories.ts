import type { ISelectOption } from "../features/transactions/SearchAndFilter.tsx";

export const sortOptions: ISelectOption[] = [
  {
    label: "Latest",
    value: "LATEST",
  },
  {
    label: "Oldest",
    value: "OLDEST",
  },
  {
    label: "A to Z",
    value: "ATOZ",
  },
  {
    label: "Highest",
    value: "HIGHEST",
  },
  {
    label: "Lowest",
    value: "LOWEST",
  },
];

export const categories: ISelectOption[] = [
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Bills",
    value: "bills",
  },
  {
    label: "Groceries",
    value: "groceries",
  },
  {
    label: "Dinning Out",
    value: "dinningOut",
  },
  {
    label: "Transportation",
    value: "transportation",
  },
  {
    label: "Personal Care",
    value: "personalCare",
  },
  {
    label: "Education",
    value: "education",
  },
  {
    label: "Lifestyle",
    value: "lifestyle",
  },
  {
    label: "Shopping",
    value: "shopping",
  },
  {
    label: "General",
    value: "general",
  },
];

export const colors: ISelectOption[] = [
  { label: "Green", value: "#277C68" },
  { label: "Yellow", value: "#F2CDAC" },
  { label: "Cyan", value: "#82C9D7" },
  { label: "Navy", value: "#626070" },
  { label: "Red", value: "#C94736" },
  { label: "Purple (Strong)", value: "#826CB0" },
  { label: "Purple (Light)", value: "#AF81BA" },
  { label: "Turquoise", value: "#597C7C" },
  { label: "Brown", value: "#93674F" },
  { label: "Magenta", value: "#934F6F" },
  { label: "Blue", value: "#3F82B2" },
  { label: "Navy Grey", value: "#97A0AC" },
  { label: "Army Green", value: "#7F9161" },
  { label: "Gold", value: "#CAB361" },
  { label: "Orange", value: "#BE6C49" },
];

export function convertToMap(options: ISelectOption[]): Record<string, string> {
  return options.reduce(
    (acc, option) => {
      acc[option.value] = option.label;
      return acc;
    },
    {} as Record<string, string>,
  );
}
