import { createStore } from "zustand/vanilla";

export type DataGridState = {
  headers: string[];
};

type headerType = "book" | "author";

export type DataGridActions = {
  changeHeader: (header: headerType) => void;
};

export type DataGridStore = DataGridState & DataGridActions;

export const defaultDataGridState: DataGridState = {
  headers: ["entry id", "title", "author", "genre", "publication date", "isbn"],
};

export const createDataGridStore = (
  initState: DataGridState = defaultDataGridState,
) => {
  return createStore<DataGridStore>((set) => ({
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
        });
      } else if (h == "author") {
        set({
          headers: ["author id", "name", "biography", "book count"],
        });
      }
    },
  }));
};
