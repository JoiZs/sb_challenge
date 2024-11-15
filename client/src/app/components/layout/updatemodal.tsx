import React, { PropsWithChildren, RefObject } from "react";
import { MinusIcon } from "@heroicons/react/24/solid";
import BreakLine from "../common/breakline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useDGridStore } from "@components/app/providers/datagrid-store-provider";
import { Alert } from "..";

type Props = {
  currRef: RefObject<HTMLDialogElement>;
  title: string;
  formElement: (props: PropsWithChildren) => React.JSX.Element;
  isBook: boolean;
};

const UpdateModal = (props: Props) => {
  const { updateBook, updateAuthor } = useDGridStore((s) => s);

  const [isAlert, setIsAlert] = React.useState<{
    status: "success" | "error";
    isOpen: boolean;
    info: string;
  }>({ status: "success", isOpen: false, info: "" });

  const RequestHandler = async () => {
    if (props.isBook) {
      const res = await updateBook();

      if (!res.error) {
        setIsAlert({
          isOpen: true,
          status: "success",
          info: "Successfully updated a record.",
        });
        setTimeout(() => {
          setIsAlert({ isOpen: false, status: "success", info: "" });
          props.currRef.current?.close();
        }, 3000);
      } else {
        setIsAlert({
          isOpen: true,
          status: "error",
          info: res.error,
        });
      }
    } else {
      const res = await updateAuthor();

      if (!res.error) {
        setIsAlert({
          isOpen: true,
          status: "success",
          info: "Successfully updated a record.",
        });
        setTimeout(() => {
          setIsAlert({ isOpen: false, status: "success", info: "" });
          props.currRef.current?.close();
        }, 3000);
      } else {
        setIsAlert({
          isOpen: true,
          status: "error",
          info: "Error at updating record.",
        });
      }
    }
  };

  return (
    <dialog
      open
      ref={props.currRef}
      className="modal backdrop:backdrop-blur-[2px] text-secondary outline outline-line"
    >
      <div className="modal-box">
        <form method="dialog">
          <button className="btn outline-line outline group btn-sm btn-square shadow-md shadow-line btn-ghost absolute right-6 top-4 hover:bg-red-300 hover:outline-red-500">
            <MinusIcon className="size-5 text-icon  group group-hover:text-white" />
          </button>
        </form>
        <h3 className="font-bold pb-2 text-xl">{props.title}</h3>
        <BreakLine />
        <props.formElement />
        <BreakLine />
        <div className="flex gap-2 items-center justify-end">
          <span>Update</span>
          <button
            onClick={RequestHandler}
            className="btn btn-sm group btn-square hover:outline-primary hover:bg-primary bg-white shadow shadow-line outline outline-line"
          >
            <CheckIcon className="size-4 text-icon group group-hover:text-white" />
          </button>
        </div>
      </div>
      <Alert
        isOpen={isAlert.isOpen}
        info={isAlert.info}
        status={isAlert.status}
      />
    </dialog>
  );
};

export default UpdateModal;
