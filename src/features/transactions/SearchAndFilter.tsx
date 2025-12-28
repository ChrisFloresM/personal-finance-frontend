import IconSortMobile from "../../components/Icons/IconSortMobile.tsx";
import IconFilterMobile from "../../components/Icons/IconFilterMobile.tsx";
import DropdownSelect from "../../components/DropdownSelect.tsx";
import SearchBar from "../../components/SearchBar.tsx";
import { categories, sortOptions } from "../../utils/SortAndCategories.ts";
import { useSearchParams } from "react-router";

export interface ISelectOption {
  label: string;
  value: string;
}

function SearchAndFilter() {
  const [urlSearchParams, setSearchParams] = useSearchParams();

  const sortBy = urlSearchParams.get("sortBy") ?? "LATEST";
  const filterCategory = urlSearchParams.get("category") ?? "ALL";
  const search = urlSearchParams.get("search") ?? "";

  function updateChangeParam(param: string, value: string) {
    setSearchParams((params) => {
      params.set(param, value);
      return params;
    });
  }

  return (
    <div>
      <div className="flex items-center gap-300 lg:justify-between lg:gap-0">
        <div className="flex-1 lg:max-w-[320px]">
          <SearchBar
            updateSearchParam={(value: string) => {
              updateChangeParam("search", value);
            }}
          />
        </div>
        <div className="flex gap-300">
          <DropdownSelect
            label="Sort by"
            options={sortOptions}
            value={sortBy}
            handleChange={(value: string) => {
              updateChangeParam("sortBy", value);
            }}
          >
            <IconSortMobile size={20} />
          </DropdownSelect>
          <DropdownSelect
            label="Categories"
            value={filterCategory}
            handleChange={(value: string) =>
              updateChangeParam("category", value)
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
