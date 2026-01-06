import type { ISelectOption } from "../features/transactions/SearchAndFilter.tsx";
import type { ICategory } from "../hooks/useCategories.ts";

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

export function categoriesToSelectOption(
  categories: ICategory[] | undefined,
): ISelectOption[] {
  if (!categories) {
    return [];
  }

  return categories.map((category) => {
    const newCat: ISelectOption = {
      label: category.label,
      value: category.key,
    };
    return newCat;
  });
}

export function getCategoryId(
  categories: ICategory[],
  categoryKey: string,
): number {
  return categories.find((cat: ICategory) => cat.key === categoryKey)?.id ?? 0;
}
