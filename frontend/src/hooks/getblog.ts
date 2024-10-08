import { useEffect, useState } from "react";
import axios from "axios";
export const useBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function getBlog() {
      const response = await axios.get(
        "https://backend.ashwinkotiyal07.workers.dev/api/v1/blog/bulk",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      const data = await response.data;
      setBlog(data.blog);
      setLoading(false);
    }

    getBlog();
  }, []);

  return {
    loading,
    blog,
  };
};
