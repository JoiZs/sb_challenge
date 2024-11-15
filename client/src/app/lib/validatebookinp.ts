import {
  InventoryCreateInput,
  AuthorCheckDocument,
} from "@components/graphql/gql";
import { isDate, isISBN } from "validator";
import { MutateReturnType } from "../stores/datagridstore";
import { useDGridStore } from "../providers/datagrid-store-provider";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export const ValidateInvInp = async (
  inv: InventoryCreateInput,
  client: ApolloClient<NormalizedCacheObject>,
): Promise<MutateReturnType> => {
  if (!isISBN(inv.isbn)) {
    throw new Error("Incorrect isbn.");
  } else if (!inv.publication_date) {
    throw new Error("Incorrect date.");
  }

  await client
    .query({
      query: AuthorCheckDocument,
      variables: {
        where: {
          author_id: {
            equals: inv.author.connect?.author_id,
          },
        },
      },
    })
    .catch(() => {
      throw new Error("no author found, create first.");
    });

  try {
    return {
      error: null,
      data: null,
    };
  } catch (error: any) {
    return {
      error: error.message,
      data: null,
    };
  }
};
