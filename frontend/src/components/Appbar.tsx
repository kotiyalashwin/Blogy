interface props {
  name: string;
  size?: "small" | "big";
}

export const AppBar = ({ name }: props) => {
  return (
    <div className="sticky top-0 flex justify-between border-b shadow-md border-black/30  items-center px-4 py-3 bg-white">
      <div className="font-semibold text-2xl tracking-widest">BlogHub</div>
      <div className="flex items-center">
        <p>
          Welcome{" "}
          <span className="font-semibold">
            {name[0].toLocaleUpperCase() + name.slice(1)}
          </span>
        </p>
        <div className="flex flex-col justify-center">
          <Avatar name={name} size="big" />
        </div>
      </div>
    </div>
  );
};

export const Avatar = ({ name, size = "big" }: props) => {
  return (
    <div
      className={`ml-2 rounded-full ${
        size === "small" ? "w-2 h-2 p-3" : "p-4 w-4 h-4"
      } text-white bg-emerald-400 flex flex-col justify-center items-center `}
    >
      {name[0].toLocaleUpperCase()}
    </div>
  );
};
