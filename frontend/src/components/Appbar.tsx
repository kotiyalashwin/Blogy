import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/curruser";
import AppbarSkeleton from "./SkeletonAppbar";
import { useState, useRef, useEffect, forwardRef } from "react";

interface props {
  name: string;
  size?: "small" | "big";
  toggleMenu: () => void;
}

export const AppBar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, loading } = useUser();
  const curr = window.location.href.slice(22);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((s) => !s);
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    navigate("/signin");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="sticky top-0 flex justify-between  items-center px-4 py-3  bg-transparent">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="font-semibold text-2xl tracking-widest text-teal-900"
      >
        Bloggy
      </button>

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
              ref={avatarRef}
              name={currentUser === "" ? "User" : currentUser}
              size="big"
              toggleMenu={toggleMenu}
            />
          </div>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="origin-top-right top-16 absolute right-0  w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-teal-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const Avatar = forwardRef<HTMLButtonElement, props>(
  ({ name, size = "big", toggleMenu }, ref) => {
    return (
      <button
        ref={ref}
        onClick={toggleMenu}
        className={` rounded-full ${
          size === "small" ? "w-1 h-1 p-3 " : "p-6 w-6 h-6 ml-2"
        } text-white  bg-emerald-400 flex flex-col justify-center items-center sm:hover:scale-105 `}
      >
        {name[0].toLocaleUpperCase()}
      </button>
    );
  }
);
