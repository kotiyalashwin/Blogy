import { Avatar } from "./Appbar";

interface props {
  name: string;
  title: string;
  content: string;
}

export const Blog = ({ name, title, content }: props) => {
  return (
    <div className="border-b mt-4 bg-white border-slate-300 p-2 space-y-2 shadow-md sm:hover:scale-110 transition-all duration-200">
      <div className="flex items-center space-x-2">
        <Avatar name={name} size="small" />
        <div>{name}</div>
      </div>
      <div className="font-bold text-xl h-full">{title}</div>
      <div className="text-neutral-500 text-sm">
        {content.length > 250 ? `${content.slice(0, 15)}...` : content}
      </div>
    </div>
  );
};
