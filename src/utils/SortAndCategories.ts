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

export function convertToMap(options: ISelectOption[]): Record<string, string> {
  return options.reduce(
    (acc, option) => {
      acc[option.value] = option.label;
      return acc;
    },
    {} as Record<string, string>,
  );
}
