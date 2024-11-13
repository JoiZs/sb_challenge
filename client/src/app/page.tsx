import { Logo, Nav, BreakLine, DataGrid } from "./components";
import { DataGridStoreProvider } from "./providers/datagrid-store-provider";

export default async function Home() {
  return (
    <DataGridStoreProvider>
      <div className="m-auto max-w-3xl bg-white rounded-lg h-full border p-2 md:p-4">
        <Logo />
        <BreakLine />
        <Nav />
        <BreakLine />
        <DataGrid />
      </div>
    </DataGridStoreProvider>
  );
}
