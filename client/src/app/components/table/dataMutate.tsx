import { useDGridStore } from "@components/app/providers/datagrid-store-provider";
import React from "react";

const DataMutate = () => {
  const { setMutateState, mutatestate } = useDGridStore((s) => s);
  return (
    <>
      <li
        onClick={() => {
          if (mutatestate == "delete") setMutateState(null);
          else setMutateState("delete");
        }}
      >
        <a>Delete</a>
      </li>
      <li
        onClick={() => {
          if (mutatestate == "update") setMutateState(null);
          else setMutateState("update");
        }}
      >
        <a>Update</a>
      </li>
    </>
  );
};

export default DataMutate;
