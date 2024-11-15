import { Author, Inventory } from "@components/graphql/gql";

export const dataToJson = (data: [] | Inventory[] | Author[]) => {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
  return dataStr;
};
