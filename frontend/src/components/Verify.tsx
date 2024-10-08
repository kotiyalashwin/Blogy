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
import toast, { Toaster } from "react-hot-toast";

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
    try {
      e.preventDefault();
      setLoading(true);
      const { success } =
        type === "signin"
          ? signinSchema.safeParse(newInputs)
          : signupSchema.safeParse(newInputs);

      if (!success) {
        toast.error("Invalid Inputs");
        return;
      }

      if (loading) {
        toast.success(
          `${type === "signin" ? "Getting you in" : "Creating your account"}`
        );
      }

      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        newInputs
      );
      const jwt = await response.data;
      localStorage.setItem("token", jwt.data);
      navigate("/blogs");
    } catch (e) {
      toast.error(`${type === "signin" ? "Login Failed" : "SignUp Failed"}`);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-white flex flex-col items-center justify-center  ">
      <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-[0.003]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-transparent"></div>
      <div className="w-full max-w-md p-4 z-10 ">
        <form
          className=" backdrop-blur-md bg-white/80 z-10  rounded-lg shadow-xl  p-8 space-y-4 mb-4 flex flex-col items-center w-full  mx-auto"
          onSubmit={sendRequest}
        >
          <h1 className="text-center my-4 text-5xl   p-2 text-black  font-bold ">
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
          <button className="w-full font-semibold bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 px-4 py-2 transition-all duration-300 transform hover:scale-105">
            {type === "signup" ? "Sign Up" : "Log In"}
          </button>

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
