import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/currentuser";
import AppbarSkeleton from "./SkeletonAppbar";

interface props {
  name: string;
  size?: "small" | "big";
}

export const AppBar = () => {
  const { currentUser, loading } = useUser();
  const curr = window.location.href.slice(22);
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 flex justify-between border-b shadow-md border-black/30  items-center px-4 py-3  bg-[#f8f8fa]">
      <div className="font-semibold text-2xl tracking-widest text-teal-900">
        BlogHub
      </div>

      {loading === true ? (
        <AppbarSkeleton />
      ) : (
        <div className="flex items-center justify-evenly ">
          {curr === "newblog" ? (
            <div></div>
          ) : (
            <button
              onClick={() => {
                navigate("/newblog");
              }}
              className=" sm:text-lg h-2/4  text-center rounded-md border z-10 border-emerald-300 font-semibold tracking-wider bg-transparent text-teal-900 px-4 mr-2 py-2 transition-all duration-300 transform hover:scale-105"
            >
              New
            </button>
          )}

          {/* <p className="font-semibold sm:text-lg tracking-wide">
            {currentUser === "" ? "USER" : currentUser.toLocaleUpperCase()}
          </p> */}
          <div className="flex flex-col justify-center">
            <Avatar
              name={currentUser === "" ? "User" : currentUser}
              size="big"
            />
          </div>
        </div>
      )}
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
