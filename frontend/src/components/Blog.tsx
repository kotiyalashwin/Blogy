import { useState } from "react";
import { Avatar } from "./Appbar";
import { motion } from "framer-motion";

interface props {
  name: string;
  title: string;
  content: string;
  onClick: () => void;
}

export const Blog = ({ name, title, content, onClick }: props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <BlogFull
          name={name}
          title={title}
          content={content}
          onClick={() => setOpen((s) => !s)}
        />
      )}
      <div
        className="border-b mt-4 cursor-pointer bg-white border-slate-300 px-6 py-10 space-y-2 shadow-md sm:hover:scale-110 transition-all duration-200"
        onClick={() => setOpen((s) => !s)}
      >
        <div className="flex items-center ">
          <Avatar name={name} size="small" toggleMenu={() => {}} />
          <div className="text-xs text-teal-900/55 ml-1">{name}</div>
        </div>
        <div className="font-bold text-[14px] text-teal-900 sm:text-xl h-full">
          {title}
        </div>
        <div className="text-neutral-500  text-[12px] sm:text-sm">
          {content.length > 150
            ? `${content.slice(0, 80)}... Read More`
            : content}
        </div>
      </div>
    </>
  );
};

export const BlogFull = ({ onClick, name, title, content }: props) => {
  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="bg-white px-8 space-y-10 py-2 h-[60vh] max-w-lg flex flex-col justify-evenly"
      >
        <div className="flex flex-col items-center justify-center border-b border-black">
          <Avatar name={name} toggleMenu={() => {}} />
          <p className="text-2xl text-neutral-400">{name.toUpperCase()}</p>
        </div>
        <p className="font-semibold text-2xl text-teal-900">{title}</p>
        <p className="">{content}</p>
        <button
          className="w-full text-white font-semibold bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 px-4 py-2 transition-all duration-300 transform hover:scale-105"
          onClick={onClick}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

// {open ? (
//   <BlogFull
//     name={el.author.name}
//     title={el.title}
//     content={el.content}
//     onClick={() => setOpen(false)}
//   />
