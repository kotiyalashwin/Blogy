import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Blogs } from "./pages/Blogs";
import { Toaster } from "react-hot-toast";
import { CreateBlog } from "./pages/CreateBlog";

function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route />
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
