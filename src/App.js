import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

//steps:
//navbar
//easy pages: about and error
//cocktail
//cocktail list
//loader
//single cocktail page
//filter function
//active
//note: in an api, if the item cannot be found, it returns null - NOTE: you cannot read length of null
//controlled and uncontrolled components:
//uncontrolled - useRef
//

export default App;
