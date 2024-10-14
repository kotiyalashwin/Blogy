import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { useState } from "react";
import {
  signinSchema,
  SignUpInput,
  signupSchema,
} from "@ashwindevs/blog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import toast from "react-hot-toast";

export const Verify = ({ type }: { type: "signup" | "signin" }) => {
  localStorage.removeItem("token");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [newInputs, setNewInputs] = useState<SignUpInput>({
    name: "",
    password: "",
    email: "",
  });

  async function sendRequest(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    try {
      const { success } =
        type === "signin"
          ? signinSchema.safeParse(newInputs)
          : signupSchema.safeParse(newInputs);

      if (!success) {
        toast.error("Invalid Inputs");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        newInputs
      );
      const jwt = await response.data;
      if (jwt.data === "-1") {
        toast.error("Invalid Credentials");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", jwt.data);
      toast.success("Success");
      setLoading(false);
      navigate("/blogs");
    } catch (e) {
      toast.error(`${type === "signin" ? "Login Failed" : "SignUp Failed"}`);
    }
  }

  return (
    <div className="min-h-screen  bg-transparent text-white flex flex-col items-center justify-center  ">
      <div className="w-full max-w-md p-4 z-10 ">
        <form
          className=" backdrop-blur-md bg-white/80 z-10  rounded-lg shadow-xl  p-8 space-y-4 mb-4 flex flex-col items-center w-full  mx-auto"
          onSubmit={sendRequest}
        >
          <h1 className="text-center my-4 text-5xl   p-2 text-teal-900  font-bold  ">
            {type === "signup" ? "Sign Up" : "Welcome Back"}
          </h1>
          {type === "signup" ? (
            <Input
              label="Username"
              placeholder="Enter your username"
              onChange={(e) => {
                setNewInputs((c) => ({ ...c, name: e.target.value }));
              }}
            />
          ) : (
            ""
          )}
          <Input
            onChange={(e) => {
              setNewInputs((c) => ({ ...c, email: e.target.value }));
            }}
            label="Email"
            placeholder={type === "signin" ? "Email" : "e@example.com"}
          />
          <Input
            onChange={(e) => {
              setNewInputs((c) => ({ ...c, password: e.target.value }));
            }}
            label="Password"
            placeholder={
              type === "signin" ? "Password" : "Minimun 6 characters"
            }
            type="password"
          />
          {loading === true ? (
            <button
              type="button"
              className="text-white disabled w-full font-semibold bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 px-4 py-2 transition-all duration-300"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                ></path>
              </svg>
              Loading...
            </button>
          ) : (
            <button className="w-full font-semibold bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 px-4 py-2 transition-all duration-300 transform hover:scale-105">
              {type === "signup" ? "Sign Up" : "Log In"}
            </button>
          )}
          {/* <button className="w-full font-semibold bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 px-4 py-2 transition-all duration-300 transform hover:scale-105">
            {type === "signup" ? "Sign Up" : "Log In"}
          </button> */}

          <div className="z-10 text-neutral-600">
            {type === "signup"
              ? "Already have an account?"
              : "Create new account?"}
            <Link
              className="pl-2 font-semibold   text-teal-400 hover:text-emerald-600 "
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signup" ? "LogIn" : "SignUp"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
