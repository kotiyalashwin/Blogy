import { useState } from "react";
import { AppBar } from "../components/Appbar";
import { Blog } from "../components/Blog";
import NoBlogsFound from "../components/NotFound";
import CardSkeleton from "../components/SkeletonBlog";
import { useBlog } from "../hooks/getblog";

export const Blogs = () => {
  const [, setOpen] = useState(false);
  const { loading, blog } = useBlog();
  if (loading) {
    return (
      <div className="bg-transparent">
        <AppBar />
        <div className="flex flex-col justify-center items-center ">
          <div className="max-w-lg sm:max-w-[80vw]  w-full p-4">
            <div className="h-[calc(100vh-150px)] ">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col">
      <AppBar />

      <div className="flex flex-col sm:flex-row justify-center bg-transparent  items-center ">
        <div className="max-w-lg sm:max-w-[80vw]  w-full p-4">
          <div className="h-screen">
            {blog?.length === 0 ? (
              <>
                <NoBlogsFound />
              </>
            ) : (
              blog?.map((el: any) => (
                <Blog
                  name={el.author.name}
                  title={el.title}
                  content={el.content}
                  onClick={() => {
                    setOpen((s) => !s);
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
