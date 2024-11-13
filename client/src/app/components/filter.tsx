import React from "react";
import SearchBar from "./searchbar";
import NavBtn from "./navbtn";
import {
  FunnelIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center w-fit">
      <SearchBar />
      <NavBtn
        className="outline outline-line"
        title="Filter"
        Icon={FunnelIcon}
      />
      <button className="btn btn-sm group btn-square hover:outline-primary hover:bg-primary bg-white outline outline-line">
        <EllipsisHorizontalIcon className="size-4 text-icon group group-hover:text-white" />
      </button>
    </div>
  );
};

export default Filter;
