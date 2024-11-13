import { Logo, Nav, BreakLine, DataGrid } from "./components";

export default async function Home() {
  return (
    <div className="m-auto max-w-3xl bg-white rounded-lg h-full border p-2 md:p-4">
      <Logo />
      <BreakLine />
      <Nav />
      <DataGrid />
    </div>
  );
}
