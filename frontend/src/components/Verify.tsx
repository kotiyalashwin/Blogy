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
  const navigate = useNavigate();

  const [newInputs, setNewInputs] = useState<SignUpInput>({
    name: "",
    password: "",
    email: "",
  });

  async function sendRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const { success } =
        type === "signin"
          ? signinSchema.safeParse(newInputs)
          : signupSchema.safeParse(newInputs);

      if (!success) {
        toast.error("Invalid Inputs");
        return;
      }

      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        newInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt.data);
      navigate("/blog");
    } catch (e) {
      toast.error(`${type === "signin" ? "Login Failed" : "SignUp Failed"}`);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex flex-col items-center justify-center  ">
      <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-[0.003]"></div>
      <div className="w-full max-w-xl ">
        <h1 className="text-center my-4 text-5xl bg-gradient-to-br text-transparent p-2 bg-clip-text from-blue-400  font-bold to-white">
          {type === "signup" ? "Sign Up" : "Log In"}
        </h1>

        <form
          className=" backdrop-blur-xl bg-black/30 z-10  rounded-lg drop-shadow-2xl  p-8 space-y-4 mb-4   mx-auto"
          onSubmit={sendRequest}
        >
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
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-900  p-2">
            {type === "signup" ? "Sign Up" : "Log In"}
          </button>
        </form>
      </div>

      <div className="z-10">
        {type === "signup"
          ? "Already have and account?"
          : "Create new account?"}
        <Link
          className="pl-2 underline text-transparent bg-clip-text bg-gradient-to-t  from-blue-500 to-white"
          to={type === "signin" ? "/signup" : "/signin"}
        >
          {type === "signup" ? "LogIn" : "SignUp"}
        </Link>
      </div>
    </div>
  );
};
