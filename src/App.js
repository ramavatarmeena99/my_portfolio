import "./App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import MySkills from "./Components/MySkills";
import MyProjects from "./Components/MyProjects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Blogs from "./Components/Blogs";


// import { useState } from "react";


function App() {
//   const [mode, setMode] = useState("light");
// const toggleMode = () =>{
//   if(mode==="light"){
//     setMode("dark");
//     document.body.style.backgroundColor = "#212529"
//   }else{
//     setMode("light")
//     document.body.style.backgroundColor = "white"

//   }

// }

  return (
    <>
      <Header  />
      <Intro  />
      <AboutMe  />
      <MySkills  />
      <MyProjects />
      <Blogs/>
      <Contact  />
      <Footer />
    </>
  );
}

export default App;
