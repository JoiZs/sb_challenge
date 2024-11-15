import React from "react";

type Props = {
  isOpen: boolean;
  status: "success" | "error";
  info: string;
};

const Alert = ({ isOpen, status, info }: Props) => {
  return (
    <div
      role="alert"
      className={` ${isOpen ? "flex" : "hidden"} max-w-xs left-1/2 -translate-x-1/2 alert z-10 fixed bottom-2 ${status == "success" ? "alert-success" : "alert-error"}`}
      // className={`alert fixed bottom-0 z-10`}
    >
      {status == "success" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            className="text-teal-800"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            className="text-red-800"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <span className="text-white">{info}</span>
    </div>
  );
};

export default Alert;
