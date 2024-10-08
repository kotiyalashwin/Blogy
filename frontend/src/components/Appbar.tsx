import { useUser } from "../hooks/currentUser";
import AppbarSkeleton from "./SkeletonAppbar";

interface props {
  name: string;
  size?: "small" | "big";
}

export const AppBar = () => {
  const { currentUser, loading } = useUser();

  return (
    <div className="sticky top-0 flex justify-between border-b shadow-md border-black/30  items-center px-4 py-3 bg-white">
      <div className="font-semibold text-2xl tracking-widest">BlogHub</div>

      {loading === true ? (
        <AppbarSkeleton />
      ) : (
        <div className="flex items-center">
          <p>
            Welcome{" "}
            <span className="font-semibold">
              {currentUser === ""
                ? "User"
                : currentUser[0].toLocaleUpperCase() + currentUser.slice(1)}
            </span>
          </p>
          <div className="flex flex-col justify-center">
            <Avatar
              name={currentUser === "" ? "User" : currentUser}
              size="big"
            />
          </div>
        </div>
      )}
      {/* <div className="flex items-center">
        <p>
          Welcome{" "}
          <span className="font-semibold">
            {currentUser === ""
              ? "User"
              : currentUser[0].toLocaleUpperCase() + currentUser.slice(1)}
          </span>
        </p>
        <div className="flex flex-col justify-center">
          <Avatar name={currentUser === "" ? "User" : currentUser} size="big" />
        </div>
      </div> */}
    </div>
  );
};

export const Avatar = ({ name, size = "big" }: props) => {
  return (
    <div
      className={` rounded-full ${
        size === "small" ? "w-1 h-1 p-3 text-xs" : "p-4 w-4 h-4 ml-2"
      } text-white bg-emerald-400 flex flex-col justify-center items-center `}
    >
      {name[0].toLocaleUpperCase()}
    </div>
  );
};
