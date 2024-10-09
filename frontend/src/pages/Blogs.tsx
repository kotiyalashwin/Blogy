import { AppBar } from "../components/Appbar";
import { Blog } from "../components/Blog";
import NoBlogsFound from "../components/NotFound";

import CardSkeleton from "../components/SkeletonBlog";
import { useBlog } from "../hooks/getblog";

export const Blogs = () => {
  const { loading, blog } = useBlog();

  if (loading) {
    return (
      <div className="sm:bg-gradient-to-br sm:from-emerald-50 sm:to-teal-50">
        <AppBar />
        <div className="flex flex-col justify-center items-center ">
          <div className="max-w-lg  w-full p-4">
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
    <div className="min-h-screen  sm:bg-gradient-to-br sm:from-emerald-50 sm:to-teal-50 flex flex-col">
      <AppBar />

      <div className="flex flex-col sm:flex-row justify-center items-center ">
        <div className="max-w-lg  w-full p-4">
          <div className="h-[calc(100vh-150px)] ">
            {blog.length === 0 ? (
              <>
                <NoBlogsFound />
              </>
            ) : (
              blog.map((el: any) => (
                <Blog
                  name={el.author.name}
                  title={el.title}
                  content={el.content}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
