import IconSearch from "./Icons/IconSearch.tsx";

function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search a transaction"
        className="border-beige-500 text-beige-500 focus:border-grey-900 focus:text-grey-900 text-preset-4 leading-preset-4 w-full rounded-[8px] border-1 px-250 py-150 pr-500 placeholder:text-ellipsis focus:outline-none"
      />
      <div className="text-grey-900 absolute top-1/2 right-250 -translate-y-1/2">
        <IconSearch size={16} />
      </div>
    </div>
  );
}

export default SearchBar;
