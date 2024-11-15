import { useDGridStore } from "@components/app/providers/datagrid-store-provider";
import { Author, AuthorCreateInput } from "@components/graphql/gql";
import React, { ChangeEvent } from "react";

const CreateAuthorForm = () => {
  const { setPayload, setUpdatePl, updatePayload } = useDGridStore(
    (state) => state,
  );
  const [authorPl, setAuthorPl] = React.useState<AuthorCreateInput>({
    name: "",
    biography: "",
  });

  const formChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!e.currentTarget) return;
    const val = e.currentTarget.value;
    let updatedApl: AuthorCreateInput = { ...authorPl };

    if (e.currentTarget.name == "name") {
      updatedApl = { ...authorPl, name: val };
      setUpdatePl({ ...(updatePayload as Author), name: val });
    } else if (e.currentTarget.name == "bio") {
      updatedApl = { ...authorPl, biography: val };
      setUpdatePl({ ...(updatePayload as Author), biography: val });
    }

    setAuthorPl(updatedApl);
    setPayload(updatedApl);
  };

  return (
    <form className="grid grid-cols-2 gap-2 text-foreground py-4">
      <label className="form-control w-full col-span-2 ">
        <div className="label">
          <span className="label-text">name</span>
        </div>

        <input
          defaultValue={authorPl.name}
          onChange={formChangeHandler}
          className="input bg-background focus:bg-white input-sm input-bordered w-full"
          name="name"
          placeholder="Type author's name"
        />
      </label>
      <label className="form-control w-full col-span-2 ">
        <div className="label">
          <span className="label-text">biography</span>
        </div>
        <textarea
          defaultValue={authorPl.biography || ""}
          onChange={formChangeHandler}
          className="textarea textarea-xs bg-background focus:bg-white  textarea-bordered w-full"
          name="bio"
          placeholder="Enter bio"
        />
      </label>
    </form>
  );
};

export default CreateAuthorForm;
