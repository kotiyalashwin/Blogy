import { AppBar } from "../components/Appbar";

export const NewBlog = () => {
  return (
    <div>
      <AppBar />

      <div className="flex flex-col justify-center items-center ">
        <div className="max-w-lg  w-full p-4">
          <div className="flex flex-col border border-black p-4">
            <label>Title</label>
            <input
              placeholder="Title..."
              className="h-20 placeholder:text-2xl outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
