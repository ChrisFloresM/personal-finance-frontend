import IconSortMobile from "../../components/Icons/IconSortMobile.tsx";
import IconFilterMobile from "../../components/Icons/IconFilterMobile.tsx";
import DropdownSelect from "../../components/DropdownSelect.tsx";
import SearchBar from "../../components/SearchBar.tsx";
import { categories, sortOptions } from "../../utils/SortAndCategories.ts";
import { useTransactionsParams } from "./useTransactionsParams.ts";

export interface ISelectOption {
  label: string;
  value: string;
}

function SearchAndFilter() {
  const {
    currentSort: sortBy,
    categoryFilter: filterCategory,
    updateSearchParams,
  } = useTransactionsParams();

  return (
    <div>
      <div className="flex items-center gap-300 lg:justify-between lg:gap-0">
        <div className="flex-1 lg:max-w-[320px]">
          <SearchBar
            updateSearchParam={(value: string) => {
              updateSearchParams("search", value);
            }}
          />
        </div>
        <div className="flex gap-300">
          <DropdownSelect
            label="Sort by"
            options={sortOptions}
            value={sortBy}
            handleChange={(value: string) => {
              updateSearchParams("sortBy", value);
            }}
          >
            <IconSortMobile size={20} />
          </DropdownSelect>
          <DropdownSelect
            label="Categories"
            value={filterCategory}
            handleChange={(value: string) =>
              updateSearchParams("category", value)
            }
            options={[
              { label: "All Transactions", value: "ALL" },
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
