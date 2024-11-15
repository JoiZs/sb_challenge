/* eslint-disable  */
import { createStore } from "zustand/vanilla";
import {
  Author,
  AuthorCreateInput,
  CreateOneAuthorDocument,
  CreateOneInventoryDocument,
  DeleteManyAuthorDocument,
  DeleteManyInventoryDocument,
  Inventory,
  InventoryCreateInput,
  QueryAuthorsDocument,
  QueryBooksDocument,
  UpdateOneAuthorDocument,
  UpdateOneInventoryDocument,
} from "@components/graphql/gql";
import createApolloClient from "../lib/apolloclient";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { ValidateInvInp } from "../lib/validatebookinp";

export type MutateReturnType = {
  error: any;
  data: any;
};

export type DataGridState = {
  headers: string[];
  data: [] | Inventory[] | Author[];
  client: ApolloClient<NormalizedCacheObject> | null;
  loading: boolean;
  isBook: boolean;
  payload: AuthorCreateInput | InventoryCreateInput | null;
  mutatestate: "delete" | "update" | null;
  filterState: "asc" | "desc";
  updatePayload: null | Author | Inventory;
};

type headerType = "book" | "author";

export type DataGridActions = {
  changeHeader: (header: headerType) => void;
  getAuthors: (
    take: number,
    skip: number,
    name?: string,
    filter?: string,
  ) => void;
  getBooks: (
    take: number,
    skip: number,
    title?: string,
    filter?: string,
  ) => void;
  initClient: () => void;
  createBook: () => Promise<MutateReturnType>;
  createAuthor: () => Promise<MutateReturnType>;
  deleteAuthors: (authors: string[]) => Promise<MutateReturnType>;
  deleteBooks: (books: string[]) => Promise<MutateReturnType>;
  updateBook: () => Promise<MutateReturnType>;
  updateAuthor: () => Promise<MutateReturnType>;
  setPayload: (pl: AuthorCreateInput | InventoryCreateInput) => void;
  setMutateState: (state: "delete" | "update" | null) => void;
  setFilterState: (state: "asc" | "desc") => void;
  setUpdatePl: (state: Author | Inventory | null) => void;
};

export type DataGridStore = DataGridState & DataGridActions;

export const defaultDataGridState: DataGridState = {
  headers: ["entry id", "title", "author", "genre", "publication date", "isbn"],
  data: [],
  client: null,
  loading: false,
  isBook: true,
  payload: null,
  mutatestate: null,
  filterState: "asc",
  updatePayload: null,
};

export const createDataGridStore = (
  initState: DataGridState = defaultDataGridState,
) => {
  return createStore<DataGridStore>((set, get) => ({
    ...initState,
    changeHeader: (h) => {
      if (h == "book") {
        set({
          headers: [
            "entry id",
            "title",
            "author",
            "genre",
            "publication date",
            "isbn",
          ],
          isBook: true,
        });
      } else if (h == "author") {
        set({
          headers: ["author id", "name", "biography", "book count"],
          isBook: false,
        });
      }
    },
    getAuthors: async (take: number, skip: number, name: string = "", fil) => {
      if (get().client == null) {
        get().initClient();
        return;
      }
      set({ loading: true });
      const orderByState = fil
        ? [
            {
              [fil]: get().filterState,
            },
          ]
        : [];

      const { data } = await get().client!.query({
        query: QueryAuthorsDocument,
        variables: {
          take,
          skip,
          orderBy: orderByState,
          where: {
            OR: [
              {
                name: {
                  contains: name,
                  mode: "insensitive",
                },
              },
            ],
          },
        },
      });

      set({ data: data.authors, loading: false });
    },
    getBooks: async (take: number, skip: number, title: string = "", fil) => {
      if (get().client == null) {
        get().initClient();
        return;
      }

      set({ loading: true });
      const orderByState = fil
        ? [
            {
              [fil]: get().filterState,
            },
          ]
        : [];
      const { data } = await get().client!.query({
        query: QueryBooksDocument,
        variables: {
          take,
          skip,
          orderBy: orderByState,
          where: {
            OR: [
              {
                title: {
                  contains: title,
                  mode: "insensitive",
                },
              },
            ],
          },
        },
      });

      set({ data: data.inventories, loading: false });
    },
    initClient: () => {
      const apClient = createApolloClient();
      set({ client: apClient });
    },
    createBook: async () => {
      if (get().client == null) {
        get().initClient();
        return { error: "No Apollo Client.", data: null };
      }

      const pl = get().payload as InventoryCreateInput;

      try {
        await ValidateInvInp(pl, get().client!);
        const { data: oneRc } = await get()
          .client!.mutate({
            mutation: CreateOneInventoryDocument,
            variables: { data: pl },
            refetchQueries: [
              {
                query: QueryBooksDocument,
                variables: {
                  take: 15,
                  skip: 0,
                  variables: {
                    take: 15,
                    skip: 0,
                    orderBy: [],
                    where: {
                      OR: [
                        {
                          name: {
                            contains: "",
                            mode: "insensitive",
                          },
                        },
                      ],
                    },
                  },
                },
              },
            ],
          })
          .catch((err) => {
            if (String(err).includes("isbn")) {
              throw new Error("isbn already exists.");
            } else {
              throw new Error("Unknown error");
            }
          });

        if (oneRc) {
          const tempData = [...get().data] as Inventory[];
          tempData[tempData.length - 1] = oneRc.createOneInventory;
          set({ data: tempData });
        }

        return {
          error: null,
          data: oneRc,
        };
      } catch (err: any) {
        return { error: err.message, data: null };
      }
    },
    createAuthor: async () => {
      if (get().client == null) {
        get().initClient();
        return {
          error: "No Apollo Client",
          data: null,
        };
      }

      const pl = get().payload as AuthorCreateInput;

      try {
        const { data: oneRc, errors } = await get().client!.mutate({
          mutation: CreateOneAuthorDocument,
          variables: { data: pl },
          refetchQueries: [
            {
              query: QueryAuthorsDocument,
              variables: {
                take: 15,
                skip: 0,
                variables: {
                  take: 15,
                  skip: 0,
                  orderBy: [],
                  where: {
                    OR: [
                      {
                        name: {
                          contains: "",
                          mode: "insensitive",
                        },
                      },
                    ],
                  },
                },
              },
            },
          ],
        });

        if (errors) {
          throw new Error("Unknown Error");
        }

        var tempData = [...get().data] as Author[];
        tempData[tempData.length - 1] = oneRc.createOneAuthor;
        set({ data: tempData });

        return {
          error: null,
          data: oneRc,
        };
      } catch (error: any) {
        return {
          error: error.message,
          data: null,
        };
      }
    },
    setPayload: (pl) => {
      set({
        payload: pl,
      });
    },
    setMutateState: (st) => {
      set({ mutatestate: st });
    },
    deleteAuthors: async (aut) => {
      if (!get().client) {
        get().initClient();
        return {
          error: "No Apollo Client",
          data: null,
        };
      }
      try {
        await get()
          .client!.mutate({
            mutation: DeleteManyAuthorDocument,
            variables: {
              where: {
                author_id: {
                  in: aut,
                },
              },
            },
            awaitRefetchQueries: true,
            refetchQueries: [
              {
                query: QueryAuthorsDocument,
                variables: {
                  take: 15,
                  skip: 0,
                  orderBy: [],
                  where: {
                    OR: [
                      {
                        name: {
                          contains: "",
                          mode: "insensitive",
                        },
                      },
                    ],
                  },
                },
              },
            ],
          })
          .catch((err) => {
            if (String(err).includes("Inventory_authorAuthor_id_fkey"))
              throw new Error("Authors have related books.");
            throw new Error("Unknown error");
          });

        var tempData = [...get().data] as Author[];
        tempData = tempData.filter((el) => !aut.includes(el.author_id));
        set({ data: tempData });

        return { data: `Deleted ${aut.length} record.`, error: null };
      } catch (error: any) {
        return { data: null, error: error.message };
      }
    },
    deleteBooks: async (inv) => {
      if (!get().client) {
        get().initClient();
        return {
          error: "No Apollo Client",
          data: null,
        };
      }
      try {
        await get()
          .client!.mutate({
            mutation: DeleteManyInventoryDocument,
            variables: {
              where: {
                entry_id: {
                  in: inv,
                },
              },
            },
            refetchQueries: [
              {
                query: QueryBooksDocument,
                variables: {
                  take: 15,
                  skip: 0,
                  variables: {
                    take: 15,
                    skip: 0,
                    orderBy: [],
                    where: {
                      OR: [
                        {
                          name: {
                            contains: "",
                            mode: "insensitive",
                          },
                        },
                      ],
                    },
                  },
                },
              },
            ],
          })
          .catch((_) => {
            throw new Error("Unknown error");
          });

        var tempData = [...get().data] as Inventory[];
        tempData = tempData.filter((el) => !inv.includes(el.entry_id));
        set({ data: tempData });

        return { data: `Deleted ${inv.length} record.`, error: null };
      } catch (error: any) {
        return { data: null, error: error.message };
      }
    },
    setFilterState: (st) => {
      set({ filterState: st });
    },
    setUpdatePl: (st) => {
      set({ updatePayload: st });
    },
    updateAuthor: async () => {
      if (!get().client) {
        get().initClient();
        return {
          error: "No Apollo Client",
          data: null,
        };
      }
      try {
        const pl = get().updatePayload as Author;

        await get()
          .client!.mutate({
            mutation: UpdateOneAuthorDocument,
            variables: {
              where: {
                author_id: pl.author_id,
              },
              data: {
                name: {
                  set: pl.name,
                },
                biography: {
                  set: pl.biography,
                },
              },
            },
            refetchQueries: "active",
            awaitRefetchQueries: true,
          })
          .catch((_) => {
            throw new Error("Unknown error");
          });

        console.log(get().data);

        return { data: `Updated a record.`, error: null };
      } catch (error: any) {
        return { data: null, error: error.message };
      }
    },
    updateBook: async () => {
      if (!get().client) {
        get().initClient();
        return {
          error: "No Apollo Client",
          data: null,
        };
      }
      try {
        const pl = get().updatePayload as Inventory;
        await get()
          .client!.mutate({
            mutation: UpdateOneInventoryDocument,
            variables: {
              where: {
                entry_id: pl.entry_id,
              },
              data: {
                title: {
                  set: pl.title,
                },
                publication_date: {
                  set: pl.publication_date,
                },
                isbn: pl.isbn,
                genre: {
                  set: pl.genre,
                },
              },
            },
            awaitRefetchQueries: true,
            refetchQueries: "active",
          })
          .catch((_) => {
            throw new Error("Unknown error");
          });

        return { data: `Updated a record.`, error: null };
      } catch (error: any) {
        return { data: null, error: error.message };
      }
    },
  }));
};
