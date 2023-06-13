import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import { useStateValue} from "./context/reducer/index.js"

function App() {
  const [state, dispatch] = useStateValue()
  return (
    <div className={`app ${state.theme ? "dark" : ""}`}>
      <Navbar />


      <Header />

      <Footer />
    </div>
  );
}

export default App;
