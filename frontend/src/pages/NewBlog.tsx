import { useState } from "react";
import { AppBar } from "../components/Appbar";

export const NewBlog = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
  });

  async function handleNewBlog(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
  }

  return (
    <div>
      <AppBar />

      <div className="flex justify-center items-center p-10  ">
        <div className="max-w-lg  w-full p-4 border shadow-md backdrop-blur-sm">
          <div className="flex flex-col   p-4">
            <form className="flex flex-col space-y-4" onSubmit={handleNewBlog}>
              <label className="text-teal-900 text-3xl">Title:</label>

              <input
                placeholder="Title to your thoughts"
                className="p-2 text-lg outline-none   transition-all   border  border-emerald-300 rounded-lg focus:ring-teal-500 focus:ring-2 focus:border-transparent ease-in-out "
              />
              <label className="text-teal-900 text-3xl">Your Idea:</label>
              <textarea
                id="blog-content"
                required
                className="outline-none w-full px-3 py-2 rounded-md  border  border-emerald-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-150 ease-in-out"
                placeholder="Write your post..."
                rows={10}
              />

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Publishing...
                    </>
                  ) : (
                    "Publish Post"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
