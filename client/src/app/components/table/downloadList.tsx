import React from "react";
import { useDGridStore } from "../../providers/datagrid-store-provider";
import { dataToJson } from "../../lib/data2json";
import { json2csv } from "json-2-csv";

const DownloadList = () => {
  const { data } = useDGridStore((state) => state);

  const JsonDownloadHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!e.currentTarget) return;

    const dataStr = dataToJson(data);
    e.currentTarget.href = dataStr;
    e.currentTarget.download = "book_management.json";
  };

  const CsvDownloadHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (!e.currentTarget) return;
    const csv = json2csv(data, {
      excludeKeys: ["author.__typename", "_count.__typename", "__typename"],
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    e.currentTarget.href = url;
    e.currentTarget.download = "book_management.csv";
  };

  return (
    <>
      <li>
        <a onClick={JsonDownloadHandler}>Export as JSON</a>
      </li>
      <li>
        <a onClick={CsvDownloadHandler}>Export as CSV</a>
      </li>
    </>
  );
};

export default DownloadList;
