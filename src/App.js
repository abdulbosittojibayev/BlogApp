import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Header from "./components/Header/Header.js";
import AllBlogs from "./components/AllBlogs/AllBlogs.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AllBlogs />

      <Footer />
    </div>
  );
}

export default App;
