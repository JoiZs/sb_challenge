"use client";

import { createContext, useRef, useContext, type ReactNode } from "react";
import { useStore } from "zustand";

import {
  type DataGridStore,
  createDataGridStore,
} from "../stores/datagridstore";

export type DataGridStoreApi = ReturnType<typeof createDataGridStore>;

export const DataGridStoreContext = createContext<DataGridStoreApi | undefined>(
  undefined,
);

interface DGridStoreProviderProps {
  children: ReactNode;
}

export const DataGridStoreProvider = ({
  children,
}: DGridStoreProviderProps) => {
  const storeRef = useRef<DataGridStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createDataGridStore();
  }
  return (
    <DataGridStoreContext.Provider value={storeRef.current}>
      {children}
    </DataGridStoreContext.Provider>
  );
};

export const useDGridStore = <T,>(selector: (store: DataGridStore) => T): T => {
  const dGridStoreCtx = useContext(DataGridStoreContext);

  if (!dGridStoreCtx) {
    throw new Error(`wrap with provider`);
  }

  return useStore(dGridStoreCtx, selector);
};
