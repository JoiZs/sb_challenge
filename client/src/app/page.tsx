import { getClient } from "./lib/apolloclient";
import { AuthorsDocument } from "@components/graphql/gql";

export default async function Home() {
  const { data } = await getClient().query({ query: AuthorsDocument });
  console.log(data);
  return <div>Hello World</div>;
}
