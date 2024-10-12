import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Blogs } from "./pages/Blogs";
import { Toaster } from "react-hot-toast";
import { CreateBlog } from "./pages/CreateBlog";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className="bg-gradient-to-br min-h-[100vh]  sm:from-emerald-50 sm:to-teal-50">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route />
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/blog/:id" element={<Blog />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/newblog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
