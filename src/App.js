import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar.js";
import Header from "./components/Header/Header.js";
import RecentBlog from "./components/RecentBlog/RecentBlog.js";
import AllBlogs from "./components/AllBlogs/AllBlogs.js";
import Footer from "./components/Footer/Footer.js";
import { useStateValue } from "./context/reducer/index.js";

function App() {
  const [state, dispatch] = useStateValue();

  return (
    <div className={`app ${state.theme ? "dark" : ""}`}>
      <Navbar />
      <Header />
      <RecentBlog />
      <AllBlogs />
      <Footer />
    </div>
  );
}

export default App;
