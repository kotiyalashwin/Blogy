import { AppBar } from "../components/Appbar";
import { Blog } from "../components/Blog";
import CardSkeleton from "../components/SkeletonBlog";
import { useBlog } from "../hooks/getblog";

export const Blogs = () => {
  const { loading, blog } = useBlog();

  if (loading) {
    return (
      <div>
        <AppBar name="ashwin" />
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
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <AppBar name={"ashwin"} />

      <div className="flex flex-col justify-center items-center ">
        <div className="max-w-lg  w-full p-4">
          <div className="h-[calc(100vh-150px)] ">
            {blog?.map((el: any) => (
              <Blog
                name={el.author.name}
                title={el.title}
                content={el.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
