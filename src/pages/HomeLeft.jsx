import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
  Link,
} from "@chakra-ui/react";
import TypingText from "./TypingText";
import { HashLink as ReachLink } from "react-router-hash-link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Devesh_Kumar_Mishra_Resume from "../files/Devesh_Kumar_Mishra_Resume.pdf";
export default function HomeLeft() {
  const openToNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1JqqV7I-lz5vjhj5Q48pTuRFDD01X_Rg7/view?usp=sharing"
    );
    // window.download(Devesh_Kumar_Mishra_Resume);
  };

  return (
    <Flex direction={"column"} w={{ base: "80%", md: "35%" }}>
      <Stack align={"center"} py={{ base: 10, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          I'm
          <Box minH={{ base: "70px", md: "150px" }}>
            <Text as={"span"} color={"#FF4D05"}>
              <TypingText text={"Devesh Kumar Mishra"} />
            </Text>
          </Box>
        </Heading>
        <Text color={"white"}>
          Aspiring Full Stack Web Developer with proficient Skilled in both
          Frontend and Backend Development for producing the Quality work. Quick
          learner with core knowledge of ReactJS, Chakra UI,
          HTML,CSS,JavaScript,NodeJS, ExpressJS, MongoDB, MERN stack technology.
          Looking forward to applying and enhancing my skills and knowledge as a
          developer. Around 1200+ Coding experience.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"#FF4D05"}
            _hover={{ bg: "white", color: "#FF4D05" }}
          >
            Hire Me
          </Button>
          <Button
            rounded={"full"}
            id={"resume-button-2"}
            _hover={{ bg: "#FF4D05", color: "white" }}
            color="#FF4D05"
            px={6}
          >
            <Link
              as={ReachLink}
              id={"resume-link-2"}
              // to={Devesh_Kumar_Mishra_Resume}
              to={
                "https://drive.google.com/uc?export=download&id=1JqqV7I-lz5vjhj5Q48pTuRFDD01X_Rg7"
              }
              target="_blank"
              // onClick={openToNewTab}
            >
              Resume
            </Link>
          </Button>
        </Stack>
        <Stack spacing={6} direction={"row"} color="white">
          <Link to={"https://github.com/devn5900"} target="_blank">
            <Icon
              as={FaGithub}
              boxSize={9}
              border="1px"
              p="1"
              borderRadius={"md"}
            />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/devesh-kumar-mishra-58b481152/"}
            target="_blank"
          >
            <Icon
              as={FaLinkedinIn}
              boxSize={9}
              border="1px"
              p="1"
              borderRadius={"md"}
            />
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
}
