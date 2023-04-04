import logo from "./logo.svg";
import "./App.css";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import bg from "./images/bg.jpg";
import Top from "./pages/Top";
import Github from "./components/Github";
function App() {
  return (
    <Box
      maxW="100%"
      minH="200vh"
      bgSize="cover"
      bgAttachment={"fixed"}
      backgroundImage={`url(${bg})`}
      // backgroundImage={`https://img.freepik.com/free-vector/abstract-banner-with-low-poly-connections-design_1048-13077.jpg?w=1380&t=st=1677572766~exp=1677573366~hmac=5929841ca4a2bc57bfbaef6c067a5fe90222537d7817276520ce159033d3e273`}
      //
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      color={"whiteAlpha.100"}
      bgColor={"blackAlpha.900"}
      scrollBehavior="smooth"
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Github />
      <Top />
    </Box>
  );
}

export default App;
