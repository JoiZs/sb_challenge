import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDGridStore } from "../../providers/datagrid-store-provider";

const SearchBar = () => {
  const { isBook, getAuthors, getBooks } = useDGridStore((state) => state);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget) return;

    const val = e.currentTarget.value;

    if (isBook) {
      getBooks(15, 0, val || "");
    } else {
      getAuthors(15, 0, val || "");
    }
  };

  return (
    <label className="input input-sm input-bordered flex items-center gap-2">
      <MagnifyingGlassIcon className="size-4" />
      <input
        onChange={searchChangeHandler}
        type="text"
        className="grow"
        placeholder="Search..."
      />
    </label>
  );
};

export default SearchBar;
