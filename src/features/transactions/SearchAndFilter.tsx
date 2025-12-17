import IconSortMobile from "../../components/Icons/IconSortMobile.tsx";
import IconFilterMobile from "../../components/Icons/IconFilterMobile.tsx";
import DropdownSelect from "../../components/DropdownSelect.tsx";
import SearchBar from "../../components/SearchBar.tsx";
import { categories, sortOptions } from "../../utils/SortAndCategories.ts";

export interface ISelectOption {
  label: string;
  value: string;
}

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
          <DropdownSelect
            label="Categories"
            options={[
              { label: "All Transactions", value: "all" },
              ...categories,
            ]}
          >
            <IconFilterMobile size={20} />
          </DropdownSelect>
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilter;
