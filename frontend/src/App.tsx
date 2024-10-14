import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Blogs } from "./pages/Blogs";
import { Toaster } from "react-hot-toast";
import { CreateBlog } from "./pages/CreateBlog";
import { Landing } from "./pages/Landing";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-[url('/bg.svg')]  bg-center bg-cover bg-no-repeat h-screen w-full min-h-[100vh] "
        animate={{ backgroundSize: ["300%", "200%"] }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        <Toaster />

        <Routes>
          <Route />
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/blog/:id" element={<Blog />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/newblog" element={<CreateBlog />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
