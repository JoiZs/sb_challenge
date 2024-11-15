import React from "react";
import { DataMutate, SearchBar, NavBtn, DownloadList } from "../";
import {
  FunnelIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useDGridStore } from "@components/app/providers/datagrid-store-provider";

const Filter = () => {
  const { filterState, setFilterState, isBook, getBooks, getAuthors } =
    useDGridStore((s) => s);
  return (
    <div className="flex flex-row gap-2 items-center w-fit">
      <SearchBar />
      <div className="dropdown dropdown-end group">
        <div tabIndex={0} role="button">
          <NavBtn
            className="border border-line group group-hover:outline-primary group-hover:outline "
            title="Filter"
            Icon={FunnelIcon}
          />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu menu-xs group bg-base-100 rounded-box z-[10] outline outline-line w-44 p-2 shadow"
        >
          <li className="p-2 flex flex-row menu-title items-center gap-2">
            <input
              onClick={
                filterState == "asc"
                  ? () => setFilterState("desc")
                  : () => setFilterState("asc")
              }
              type="checkbox"
              className="toggle toggle-sm"
            />
            <span className="dropdown-open">
              {filterState == "asc" ? "ascending" : "descending"}
            </span>
          </li>
          {isBook
            ? ["title", "genre", "isbn", "publication_date"].map((el, idx) => (
                <li key={idx}>
                  <a
                    onClick={() => {
                      getBooks(15, 0, undefined, el);
                    }}
                  >
                    {el}
                  </a>
                </li>
              ))
            : ["name"].map((el, idx) => (
                <li key={idx}>
                  <a onClick={() => getAuthors(15, 0, undefined, el)}>{el}</a>
                </li>
              ))}
        </ul>
      </div>
      <div className="dropdown group dropdown-end">
        <div role="button" tabIndex={1}>
          <button className="btn group group-hover:bg-primary group-hover:outline group-hover:outline-primary btn-sm group btn-square hover:outline-primary hover:bg-primary bg-white outline outline-line">
            <EllipsisHorizontalIcon className="size-4 text-icon group group-hover:text-white" />
          </button>
        </div>
        <ul
          tabIndex={1}
          className="group dropdown-content menu bg-base-100 rounded-box z-[10] outline outline-line w-52 p-2 shadow"
        >
          <DownloadList />
          <DataMutate />
        </ul>
      </div>
    </div>
  );
};

export default Filter;
