import React from "react";
import { BookmarkIcon, UserIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Filter, NavBtn } from "./";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center md:justify-between">
      <div className="flex flex-row gap-1 w-fit rounded-lg bg-background">
        <NavBtn title="Book" Icon={BookmarkIcon} />
        <NavBtn title="Author" Icon={UserIcon} />
        <button className="btn btn-sm group btn-square hover:outline-primary hover:bg-primary bg-white shadow shadow-line outline outline-line">
          <PlusIcon className="size-4 text-icon group group-hover:text-white" />
        </button>
      </div>
      <Filter />
    </div>
  );
};

export default Nav;
