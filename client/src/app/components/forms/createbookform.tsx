import {
  AuthorSearchDocument,
  AuthorSearchQuery,
  Genre,
  Inventory,
  InventoryCreateInput,
} from "@components/graphql/gql";
import React from "react";
import createApolloClient from "../../lib/apolloclient";
import { useDGridStore } from "@components/app/providers/datagrid-store-provider";

const CreateBookForm = () => {
  const [searchAut, setSearchAut] = React.useState<
    AuthorSearchQuery["authors"]
  >([]);
  const [genreList, setGenreList] = React.useState<Genre[]>([]);
  const [selectAuth, setSelectAuth] = React.useState<
    AuthorSearchQuery["authors"][number] | null
  >(null);

  const [invPl, setInvPl] = React.useState<InventoryCreateInput>({
    isbn: "",
    title: "",
    author: {
      connect: {
        author_id: "",
      },
    },
    publication_date: "",
  });

  const { setPayload, setUpdatePl, updatePayload } = useDGridStore(
    (state) => state,
  );

  const formChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!e.currentTarget) return;
    const val = e.currentTarget.value;
    const etype = e.currentTarget.name;
    let updatedInvPl: InventoryCreateInput = { ...invPl };

    if (etype == "title") {
      updatedInvPl = { ...updatedInvPl, title: val };
      setUpdatePl({ ...(updatePayload as Inventory), title: val });
    }

    if (etype == "isbn") {
      updatedInvPl = { ...updatedInvPl, isbn: val };
      setUpdatePl({ ...(updatePayload as Inventory), isbn: val });
    }
    if (etype == "pubdate") {
      updatedInvPl = {
        ...updatedInvPl,
        publication_date: new Date(val).toISOString(),
      };
      setUpdatePl({
        ...(updatePayload as Inventory),
        publication_date: updatedInvPl.publication_date,
      });
    }
    setInvPl(updatedInvPl);
    setPayload(updatedInvPl);
  };

  const searchAuthorHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!e.currentTarget) return;
    setSelectAuth(null);
    const val = e.currentTarget.value;
    const apC = createApolloClient;
    const { data } = await apC().query({
      query: AuthorSearchDocument,
      variables: {
        where: {
          name: {
            mode: "insensitive",
            contains: val,
          },
        },
        take: 3,
      },
    });

    const { authors } = data as AuthorSearchQuery;
    setSearchAut(authors);
  };

  const selectAuthorHandler = (el: AuthorSearchQuery["authors"][number]) => {
    setSelectAuth(el);
    let updatedInvPl: InventoryCreateInput = { ...invPl };
    updatedInvPl = {
      ...updatedInvPl,
      author: {
        connect: {
          author_id: el.author_id,
        },
      },
    };

    setUpdatePl({
      ...(updatePayload as Inventory),
      authorAuthor_id: el.author_id,
    });
    setInvPl(updatedInvPl);
    setPayload(updatedInvPl);
  };

  const toggleEnumHandler = (gr: Genre) => {
    let updatedInvPl: InventoryCreateInput = { ...invPl };

    if (genreList.includes(gr)) {
      updatedInvPl = {
        ...updatedInvPl,
        genre: { set: genreList.filter((el) => el != gr) },
      };
      setGenreList((prev) => {
        return prev.filter((el) => el != gr);
      });
      setUpdatePl({
        ...(updatePayload as Inventory),
        genre: genreList.filter((el) => el != gr),
      });
    } else {
      updatedInvPl = {
        ...updatedInvPl,
        genre: { set: [...genreList, gr] },
      };
      setUpdatePl({
        ...(updatePayload as Inventory),
        genre: [...genreList, gr],
      });

      setGenreList((prev) => {
        return [...prev, gr];
      });
    }

    setInvPl(updatedInvPl);
    setPayload(updatedInvPl);
  };

  return (
    <form className="grid grid-cols-2 gap-2 text-foreground py-4">
      <label className="form-control w-full col-span-2 md:col-span-1">
        <div className="label">
          <span className="label-text">title</span>
        </div>

        <input
          type="text"
          onChange={formChangeHandler}
          className="input bg-background focus:bg-white input-sm input-bordered w-full"
          name="title"
          placeholder="Enter title"
        />
      </label>

      <label className="form-control w-full col-span-2 md:col-span-1">
        <div className="label">
          <span className="label-text">isbn</span>
        </div>

        <input
          type="text"
          onChange={formChangeHandler}
          className="input bg-background focus:bg-white input-sm input-bordered w-full"
          name="isbn"
          defaultValue={""}
          placeholder="Enter Isbn"
        />
      </label>
      <label className="form-control w-full col-span-2 md:col-span-1">
        <div className="label">
          <span className="label-text">author</span>
        </div>
        <div className="dropdown dropdown-end group">
          <div tabIndex={0} role="button">
            <input
              onChange={searchAuthorHandler}
              placeholder="Search author"
              className="input bg-background focus:bg-white input-sm input-bordered w-full"
              value={selectAuth?.name || ""}
              name="author"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu-sm menu group bg-base-100 rounded-box z-[10] outline outline-line w-52 p-2 shadow"
          >
            {searchAut.length <= 0 && (
              <span className="text-red-500">Create an author first.</span>
            )}
            {searchAut.map((el) => (
              <li key={el.author_id} onClick={() => selectAuthorHandler(el)}>
                <span className="label-text">{el.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </label>
      <label className="form-control w-full col-span-2 md:col-span-1">
        <div className="label">
          <span className="label-text">genre</span>
        </div>
        <div className="dropdown dropdown-end group">
          <div tabIndex={1} role="button">
            <input
              placeholder="genre"
              className="input cursor-pointer disabled:cursor-pointer bg-background focus:bg-white input-sm input-bordered w-full"
              disabled
              defaultValue={genreList.join(", ")}
              name="genre"
            />
          </div>
          <ul
            tabIndex={1}
            className="dropdown-content menu-sm menu group bg-base-100 rounded-box z-[10] outline outline-line w-52 p-2 shadow"
          >
            {Object.values(Genre).map((el, idx) => (
              <li key={idx} onClick={() => toggleEnumHandler(el)}>
                <span className="label-text">{el}</span>
              </li>
            ))}
          </ul>
        </div>
      </label>
      <label className="form-control w-full col-span-2 ">
        <div className="label">
          <span className="label-text">publication date</span>
        </div>
        <input
          onChange={formChangeHandler}
          type="date"
          className="input bg-background focus:bg-white input-sm input-bordered w-full"
          name="pubdate"
        />
      </label>
    </form>
  );
};

export default CreateBookForm;
