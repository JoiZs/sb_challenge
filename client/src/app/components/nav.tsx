"use client";
import React, { useRef, useState } from "react";
import { BookmarkIcon, UserIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Filter, NavBtn } from "./";
import { useDGridStore } from "../providers/datagrid-store-provider";

type Props = {};

const Nav = (props: Props) => {
  const { changeHeader } = useDGridStore((state) => state);
  const [isBook, setIsBook] = useState(true);
  const AddFormRef = useRef<null | HTMLDialogElement>(null);

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center md:justify-between">
      <div className="flex flex-row gap-1 w-fit rounded-lg bg-background">
        <NavBtn
          action={() => {
            changeHeader("book");
            setIsBook(true);
          }}
          isOpen={isBook}
          title="Book"
          Icon={BookmarkIcon}
        />
        <NavBtn
          action={() => {
            changeHeader("author");
            setIsBook(false);
          }}
          isOpen={!isBook}
          title="Author"
          Icon={UserIcon}
        />
        <button className="btn btn-sm group btn-square hover:outline-primary hover:bg-primary bg-white shadow shadow-line outline outline-line">
          <PlusIcon className="size-4 text-icon group group-hover:text-white" />
        </button>
      </div>
      <Filter />
    </div>
  );
};

export default Nav;
