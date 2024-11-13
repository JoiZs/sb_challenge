"use client";

import { useDGridStore } from "../providers/datagrid-store-provider";

const DataGrid = () => {
  const { headers } = useDGridStore((state) => state);
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              {headers.map((el) => (
                <td className="capitalize">{el}</td>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
