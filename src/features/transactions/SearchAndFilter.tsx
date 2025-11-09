import IconSortMobile from "../../components/Icons/IconSortMobile.tsx";
import IconFilterMobile from "../../components/Icons/IconFilterMobile.tsx";
import DropdownSelect from "../../components/DropdownSelect.tsx";
import SearchBar from "../../components/SearchBar.tsx";

export interface ISelectOption {
  label: string;
  value: string;
}

const sortOptions: ISelectOption[] = [
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

const filterOptions: ISelectOption[] = [
  {
    label: "All Transactions",
    value: "all",
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
];

function SearchAndFilter() {
  return (
    <div>
      <div className="flex items-center gap-300 lg:justify-between lg:gap-0">
        <div className="flex-1 lg:max-w-[320px]">
          <SearchBar />
        </div>
        <div className="flex gap-300">
          <DropdownSelect label="Sort by" options={sortOptions}>
            <IconSortMobile size={20} />
          </DropdownSelect>
          <DropdownSelect label="Categories" options={filterOptions}>
            <IconFilterMobile size={20} />
          </DropdownSelect>
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilter;
