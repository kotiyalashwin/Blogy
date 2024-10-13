import axios from "axios";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getUser() {
      const response = await axios.get(
        `https://backend.ashwinkotiyal07.workers.dev/api/v1/user/curuser`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      const data = await response.data.current;
      setCurrentUser(data.name);
      setLoading(false);
    }

    getUser();
  }, []);

  return { currentUser, loading };
};
