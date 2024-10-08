import { Avatar } from "./Appbar";

interface props {
  name: string;
  title: string;
  content: string;
}

export const Blog = ({ name, title, content }: props) => {
  return (
    <div className="border-b mt-4 bg-white border-slate-300 p-2 space-y-2 shadow-md sm:hover:scale-110 transition-all duration-200">
      <div className="flex items-center ">
        <Avatar name={name} size="small" />
        <div className="text-xs text-slate-600 ml-1">{name}</div>
      </div>
      <div className="font-bold text-[14px] sm:text-xl h-full">{title}</div>
      <div className="text-neutral-500  text-[12px] sm:text-sm">
        {content.length > 250 ? `${content.slice(0, 15)}...` : content}
      </div>
    </div>
  );
};
