import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <label className="input input-sm input-bordered flex items-center gap-2">
      <MagnifyingGlassIcon className="size-4" />
      <input type="text" className="grow" placeholder="Search..." />
    </label>
  );
};

export default SearchBar;
