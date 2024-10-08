import { Verify } from "../components/Verify";

export const SignUp = () => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <Verify type="signup" />
    </div>
  );

  // const [newInputs, setNewInputs] = useState<SignUpInput>({
  //   name: "",
  //   password: "",
  //   email: "",
  // });

  // return (
  //   <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white flex flex-col items-center justify-center  ">
  //     <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-[0.003]"></div>
  //     <div className="w-full max-w-xl ">
  //       <h1 className="text-center my-4 text-5xl bg-gradient-to-br text-transparent p-2 bg-clip-text from-blue-400  font-bold to-white">
  //         Sign Up
  //       </h1>

  //       <form className=" backdrop-blur-xl bg-black/30 z-10  rounded-lg drop-shadow-2xl  p-8 space-y-4 mb-4   mx-auto">
  //         <Input
  //           label="Username"
  //           placeholder="Enter your username"
  //           onChange={(e) => {
  //             setNewInputs((c) => ({ ...c, name: e.target.value }));
  //           }}
  //         />
  //         <Input
  //           onChange={(e) => {
  //             setNewInputs((c) => ({ ...c, email: e.target.value }));
  //           }}
  //           label="Email"
  //           placeholder="e@example.com"
  //         />
  //         <Input
  //           onChange={(e) => {
  //             setNewInputs((c) => ({ ...c, password: e.target.value }));
  //           }}
  //           label="Password"
  //           placeholder="Min 6 Character"
  //           type="password"
  //         />
  //         <button className="w-full bg-gradient-to-r from-blue-600 to-blue-900  p-2">
  //           Sign Up
  //         </button>
  //       </form>
  //     </div>

  //     <div className="z-10">
  //       Already have and account?{" "}
  //       <Link
  //         className=" underline text-transparent bg-clip-text bg-gradient-to-t  from-blue-500 to-white"
  //         to={"/signin"}
  //       >
  //         LogIn
  //       </Link>
  //     </div>
  //   </div>
  // );
};
