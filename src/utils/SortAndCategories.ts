import type { ISelectOption } from "../features/transactions/SearchAndFilter.tsx";

export const sortOptions: ISelectOption[] = [
  {
    label: "Latest",
    value: "latest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
  {
    label: "A to Z",
    value: "AtoZ",
  },
  {
    label: "Highest",
    value: "highest",
  },
  {
    label: "Lowest",
    value: "lowest",
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
