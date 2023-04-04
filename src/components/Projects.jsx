import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ProjectChild from "../pages/ProjectChild";
import {
  FaDharmachakra,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { DiAtom, DiNodejsSmall } from "react-icons/di";
import {
  SiExpress,
  SiPostman,
  SiMongodb,
  SiGithub,
  SiNpm,
  SiCanva,
  SiNetlify,
  SiReplit,
  SiVisualstudiocode,
  SiNotion,
  SiCodesandbox,
  SiJson,
} from "react-icons/si";
import codebook from "../images/codebook.png";
import roamaround from "../images/roamaround.png";
import awadhstore from "../images/awadhstore.png";
const Projects = () => {
  const codebookLink = [
    // HTML | CSS | JS | MockAPI
    { icon: FaReact, title: "React JS" },
    { icon: FaDharmachakra, title: "Chakra UI" },
    { icon: SiJson, title: "JSON Server" },
  ];
  const roamAroundLink = [
    // HTML | CSS | JS | MockAPI
    { icon: FaHtml5, title: "HTML" },
    { icon: FaCss3Alt, title: "CSS" },
    { icon: FaJsSquare, title: "JavaScript" },
    { icon: FaDharmachakra, title: "Mock API" },
  ];
  const awadhStoreLink = [
    // HTML | CSS | JS | MockAPI
    { icon: FaHtml5, title: "HTML" },
    { icon: FaCss3Alt, title: "CSS" },
    { icon: FaJsSquare, title: "JavaScript" },
    { icon: FaDharmachakra, title: "Mock API" },
  ];
  const awadhStoreText = {
    title: "Awadh Store - Clone",
    desc: "Online Book Store for CS students. This is an individual Project. ",
    deploy: "https://lovely-treacle-30b070.netlify.app/#",
    gitRepo: "https://github.com/devn5900/tops-basin-5044",
    image: awadhstore,
    feature: [
      "  User can Login or Signup",
      "Add to Cart",
      "Searching",
      "Sorting",
      "Filtering on Products",
      "Authentication",
      "Payment Option",
    ],
  };
  const codeBookText = {
    title: "Code Book - Clone",
    desc: "  Online Book Store for CS students. This is an individual Project. ",
    deploy: "https://codebookdevn.netlify.app/",
    gitRepo: "https://github.com/devn5900/roasted-geese-6392",
    image: codebook,
    feature: [
      "  User can Login or Signup",
      "Add to Cart",
      "Searching",
      "Sorting",
      "Filtering on Products",
      "Authentication",
      "Payment Option",
    ],
  };
  const roamAroundText = {
    title: "Roam Around - Clone",
    desc: " It is a trip advisor website. Booking rooms, Tourist places, travel destination and accommodation website. Developed along with a team of 3 members in 5 days. ",
    deploy: "https://loquacious-centaur-45f47d.netlify.app/index.html",
    gitRepo: "https://github.com/devn5900/subsequent-invention-8280",
    image: roamaround,
    feature: [
      "Hotels Page",
      "Places Page",
      "Searching",
      "Admin Authentication",
      "Admin Page",
    ],
  };
  // const codebook = [
  //   { icon: FaHtml5, title: "HTML" },
  //   { icon: FaCss3Alt, title: "CSS" },
  //   { icon: FaJsSquare, title: "JavaScript" },
  //   { icon: FaReact, title: "React JS" },
  //   { icon: DiAtom, title: "Redux" },
  //   { icon: FaDharmachakra, title: "Chakra UI" },
  //   { icon: DiNodejsSmall, title: "Node JS" },
  //   { icon: SiExpress, title: "Express JS" },
  //   { icon: SiMongodb, title: "Mongo DB" },
  // ];
  return (
    <Box id="projects" overflow="hidden">
      <Flex
        direction={"column"}
        justifyContent={"space-around"}
        color="gray.900"
        bg="#FF4D05"
        p={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
        alignItems={["space-around", "center"]}
        minH={"100vh"}
      >
        <Heading
          textTransform={"uppercase"}
          color={"gray.400"}
          fontWeight={600}
          bg={"gray.900"}
          p={2}
          pl={4}
          pr={4}
          rounded={"md"}
          textAlign={"center"}
        >
          Projects
        </Heading>
        <ProjectChild techStack={codebookLink} project={codeBookText} />
        <ProjectChild techStack={roamAroundLink} project={roamAroundText} />
        <ProjectChild techStack={awadhStoreLink} project={awadhStoreText} />
        <ProjectChild techStack={awadhStoreLink} project={awadhStoreText} />
      </Flex>
    </Box>
  );
};

export default Projects;
