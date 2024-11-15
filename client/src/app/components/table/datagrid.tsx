"use client";

import React, { useEffect, useState } from "react";
import { useDGridStore } from "../../providers/datagrid-store-provider";
import moment from "moment";
import { Alert, CreateAuthorForm, CreateBookForm, UpdateModal } from "../";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Author, Inventory } from "@components/graphql/gql";

const DataGrid = () => {
  useEffect(() => {
    const fetchInitBook = () => {
      initClient();
      getBooks(15, 0);
    };

    fetchInitBook();
  }, []);

  const {
    deleteBooks,
    deleteAuthors,
    isBook,
    data,
    headers,
    initClient,
    getBooks,
    mutatestate,
    setMutateState,
    setUpdatePl,
  } = useDGridStore((state) => state);

  const [dId, setDId] = useState<string[]>([]);
  const [updateFormOpen, setUpdateFormOpen] = useState(false);
  const updateFormRef = React.useRef<HTMLDialogElement>(null);

  const [isAlert, setIsAlert] = useState<{
    status: "success" | "error";
    isOpen: boolean;
    info: string;
  }>({ status: "success", isOpen: false, info: "" });

  const confirmDelete = async () => {
    if (isBook) {
      const res = await deleteBooks(dId);
      if (!res.error) {
        setDId([]);
        setMutateState(null);
        setIsAlert({
          isOpen: true,
          status: "success",
          info: res.data,
        });

        setTimeout(() => {
          setIsAlert({ isOpen: false, status: "success", info: "" });
        }, 3000);
      } else {
        setIsAlert({
          isOpen: true,
          status: "error",
          info: res.error,
        });

        setTimeout(() => {
          setIsAlert({ isOpen: false, status: "success", info: "" });
        }, 3000);
      }
    } else {
      const res = await deleteAuthors(dId);

      if (!res.error) {
        setDId([]);
        setMutateState(null);
        setIsAlert({
          isOpen: true,
          status: "success",
          info: res.data,
        });

        setTimeout(() => {
          setIsAlert({ isOpen: false, status: "success", info: "" });
        }, 3000);
      } else {
        setIsAlert({
          isOpen: true,
          status: "error",
          info: res.error,
        });

        setTimeout(() => {
          setIsAlert({ isOpen: false, status: "success", info: "" });
        }, 3000);
      }
    }
  };

  const updateFormHandler = (dt: Author | Inventory) => {
    setUpdatePl(dt);
    setUpdateFormOpen(true);
    updateFormRef.current?.showModal();
  };

  const deleteHandler = (id: string) => {
    let updatedDId = [...dId];

    if (updatedDId.includes(id)) {
      updatedDId = updatedDId.filter((el) => el != id);
    } else {
      updatedDId = [...updatedDId, id];
    }

    setDId(updatedDId);
  };

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              {headers.map((el, idx) => (
                <td key={idx} className="capitalize">
                  {el}
                </td>
              ))}

              {mutatestate == "delete" && (
                <td
                  onClick={confirmDelete}
                  className="cursor-pointer btn btn-ghost btn-xs"
                >
                  Confirm
                </td>
              )}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.length <= 0 && (
              <tr className="">
                <td>No record found... </td>
              </tr>
            )}
            {data.map((el, idx) => {
              if (el.__typename == "Inventory") {
                return (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{el.entry_id}</td>
                    <td>{el.title}</td>
                    <td>{el.author.name}</td>
                    <td>{el.genre.join(", ")}</td>
                    <td>
                      {moment(new Date(el.publication_date)).format(
                        "MMM, DD YYYY",
                      )}
                    </td>
                    <td>{el.isbn}</td>
                    {mutatestate == "update" && (
                      <td className="text-center cursor-pointer">
                        <PencilSquareIcon
                          onClick={() => updateFormHandler(el)}
                          className="size-4"
                        />
                      </td>
                    )}
                    {mutatestate == "delete" && (
                      <td className="text-center">
                        <input
                          onClick={() => deleteHandler(el.entry_id)}
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-xs"
                        />
                      </td>
                    )}
                  </tr>
                );
              } else if (el.__typename == "Author") {
                return (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{el.author_id}</td>
                    <td>{el.name}</td>
                    <td>{el.biography}</td>
                    <td>{el._count?.Inventory}</td>
                    {mutatestate == "update" && (
                      <td className="text-center cursor-pointer">
                        <PencilSquareIcon
                          onClick={() => updateFormHandler(el)}
                          className="size-4"
                        />
                      </td>
                    )}

                    {mutatestate == "delete" && (
                      <td className="text-center">
                        <input
                          onClick={() => deleteHandler(el.author_id)}
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-xs"
                        />
                      </td>
                    )}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <Alert
        isOpen={isAlert.isOpen}
        info={isAlert.info}
        status={isAlert.status}
      />

      {updateFormOpen && (
        <UpdateModal
          title={isBook ? "update book" : "update author"}
          isBook={isBook}
          currRef={updateFormRef}
          formElement={isBook ? CreateBookForm : CreateAuthorForm}
        />
      )}
    </div>
  );
};

export default DataGrid;
