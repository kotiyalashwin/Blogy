import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  localStorage.removeItem("token");
  return (
    <motion.div className=" bg-transparent min-h-screen flex flex-col items-center justify-evenly">
      <HomeAppBar />
      <Home />
    </motion.div>
  );
};

const HomeAppBar = () => {
  // const sections = ["home", "about", "contactUs"];

  return (
    <header className="sticky top-0 w-full bg-transparent px-6 py-4 flex justify-between items-center">
      <div className="text-3xl text-emerald-600 flex tracking-wider">
        BLOGGY
      </div>
      {/* <div className="w-auto ">
        <ul className="flex justify-evenly space-x-6 text-emerald-600 ">
          {sections.map((section) => (
            <li key={section} className="sm:text-xl">
              <button className=" border-0 hover:ring-1  hover:bg-white/30 transition-all p-4 duration-300 ease-in-out">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
    </header>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      id="home"
      className="min-h-screen max-w-md sm:max-w-screen-2xl flex flex-col justify-center items-center p-4"
    >
      <motion.div className="w-full flex flex-col justify-evenly items-center">
        <motion.h1
          initial={{ scale: 3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ fontSize: "10rem" }}
          transition={{ duration: 1 }}
          className="text-teal-900 text-8xl  mb-8 text-center "
        >
          Welcome to Bloggy
        </motion.h1>
        <motion.p
          className="text-2xl text-center"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Minimal experience creative thinking.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [100, 0] }}
          transition={{ delay: 2 }}
          className="mt-8 bg-teal-800 py-4 px-4 rounded-full text-white  "
          onClick={() => {
            navigate("/signup");
          }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};
