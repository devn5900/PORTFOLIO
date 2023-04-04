import {
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
  Box,
  WrapItem,
  Wrap,
  Image,
  Center,
} from "@chakra-ui/react";
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
} from "react-icons/si";
import React from "react";

const Skills = () => {
  const skill = [
    { icon: FaHtml5, title: "HTML" },
    { icon: FaCss3Alt, title: "CSS" },
    { icon: FaJsSquare, title: "JavaScript" },
    { icon: FaReact, title: "React JS" },
    { icon: DiAtom, title: "Redux" },
    { icon: FaDharmachakra, title: "Chakra UI" },
    { icon: DiNodejsSmall, title: "Node JS" },
    { icon: SiExpress, title: "Express JS" },
    { icon: SiMongodb, title: "Mongo DB" },
  ];
  const tool = [
    { icon: SiVisualstudiocode, title: "VS Code" },
    { icon: SiGithub, title: "GitHub" },
    { icon: SiPostman, title: "Postman" },
    { icon: SiNpm, title: "NPM" },
    { icon: SiCanva, title: "Canva" },
    { icon: SiNetlify, title: "Netlify" },
    { icon: SiReplit, title: "Replit" },
    { icon: SiNotion, title: "Notion" },
    { icon: SiCodesandbox, title: "Codesand Box" },
  ];
  return (
    <Box id="skills">
      <Flex
        direction={{ sm: "column", base: "column", lg: "row" }}
        p={["1.5rem", "3rem"]}
        alignItems={["space-around", "center"]}
        justifyContent={"space-evenly"}
        minH={"100vh"}
      >
        <Stack spacing={4} w={["auto", "35%"]}>
          <Heading
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={600}
            bg={"#FF4D05"}
            p={2}
            pl={4}
            pr={4}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Skills
          </Heading>

          <Wrap pt="2rem">
            {skill?.map((el, i) => {
              return (
                <WrapItem key={i}>
                  <Center
                    bg={i % 2 == 0 ? "gray.900" : " #FF4D05"}
                    border={
                      i % 2 == 0 ? "1px solid #FF4D05" : "1px solid gray.900"
                    }
                    p={2}
                    borderRadius="md"
                    className="skills-card"
                  >
                    <Icon
                      as={el.icon}
                      className="skills-card-img"
                      fontSize={["1rem", "1.4rem"]}
                      color={"white"}
                    ></Icon>
                    <Text
                      pl={"0.4rem"}
                      className="skills-card-name"
                      fontSize={["1rem", "1.4rem"]}
                      color={"white"}
                    >
                      {el.title}
                    </Text>
                  </Center>
                </WrapItem>
              );
            })}
          </Wrap>
        </Stack>
        <Stack spacing={4} w={["auto", "35%"]}>
          <Heading
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={600}
            bg={"#FF4D05"}
            p={2}
            pl={4}
            pr={4}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Tools / Use
          </Heading>

          <Wrap pt="3rem">
            {tool?.map((el, i) => {
              return (
                <WrapItem key={i}>
                  <Center
                    bg={i % 2 == 0 ? "gray.900" : " #FF4D05"}
                    border={
                      i % 2 == 0 ? "1px solid #FF4D05" : "1px solid gray.900"
                    }
                    p={[1, 2]}
                    borderRadius="md"
                    className="skills-card"
                  >
                    <Icon
                      as={el.icon}
                      className="skills-card-img"
                      fontSize={["1rem", "1.4rem"]}
                      color={"white"}
                    ></Icon>
                    <Text
                      pl={"0.4rem"}
                      className="skills-card-name"
                      fontSize={["1rem", "1.4rem"]}
                      color={"white"}
                    >
                      {el.title}
                    </Text>
                  </Center>
                </WrapItem>
              );
            })}
          </Wrap>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Skills;
