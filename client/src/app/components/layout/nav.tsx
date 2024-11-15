"use client";
import React, { useRef, useState } from "react";
import { BookmarkIcon, UserIcon, PlusIcon } from "@heroicons/react/24/outline";
import { CreateBookForm, CreateAuthorForm, Filter, Modal, NavBtn } from "..";
import { useDGridStore } from "../../providers/datagrid-store-provider";

const Nav = () => {
  const { changeHeader, getAuthors, getBooks } = useDGridStore(
    (state) => state,
  );
  const [isBook, setIsBook] = useState(true);
  const AddFormRef = useRef<null | HTMLDialogElement>(null);

  const openAddFormHandler = () => {
    if (!AddFormRef.current) return;

    AddFormRef.current.showModal();
  };

  const bookChangeHandler = () => {
    changeHeader("book");
    getBooks(15, 0);
    setIsBook(true);
  };

  const authorChangeHandler = () => {
    changeHeader("author");
    getAuthors(15, 0);
    setIsBook(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center md:justify-between">
      <div className="flex flex-row gap-1 w-fit rounded-lg bg-background">
        <NavBtn
          action={bookChangeHandler}
          isOpen={isBook}
          title="Book"
          Icon={BookmarkIcon}
        />
        <NavBtn
          action={authorChangeHandler}
          isOpen={!isBook}
          title="Author"
          Icon={UserIcon}
        />
        <button
          onClick={openAddFormHandler}
          className="btn btn-sm group btn-square hover:outline-primary hover:bg-primary bg-white shadow shadow-line outline outline-line"
        >
          <PlusIcon className="size-4 text-icon group group-hover:text-white" />
        </button>
      </div>

      <Modal
        isBook={isBook}
        formElement={isBook ? CreateBookForm : CreateAuthorForm}
        title={isBook ? "create a book" : "create an author"}
        currRef={AddFormRef}
      />
      <Filter />
    </div>
  );
};

export default Nav;
