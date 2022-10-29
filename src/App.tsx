import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Footer from "./components/Footer/Footer";
import Work from "./components/Works/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Work />
      <Footer />
    </>
  );
};

export default App;
