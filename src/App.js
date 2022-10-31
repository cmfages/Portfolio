import React from "react";
import Home from "./components/home/index";
import Loader from "./components/loader/loader";

function App() {
  return (
    <div>
      <Loader />
      <Home />
    </div>
    
  )
}

export default App