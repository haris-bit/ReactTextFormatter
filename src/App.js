import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import React, { useState } from "react";

function App() {
  // hook for state management
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    // this jsx code is compiled by Babel
    <>
      <Navbar title="Haris" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter your Text to Anayze Below" mode={mode} />
      </div>
      {/* <div className="container my-3">
        <About />
      </div> */}
    </>
  );
}

export default App;
