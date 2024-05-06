import {
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Skeleton,
  Box,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import about from "../images/about.png";
import TypingText from "../pages/TypingText";
import { BsCode } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { SiMicrosoftacademic } from "react-icons/si";
export default function About() {
  return (
    <Box id="about" className="about section">
      <Flex
        direction={{ sm: "column", base: "column", lg: "row" }}
        justifyContent={"space-around"}
        color="gray.900"
        bg="#FF4D05"
        p={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
        alignItems={["space-around", "center"]}
        minH={"100vh"}
      >
        <Stack spacing={4} w={["auto", "35%"]}>
          <Heading
            textTransform={"uppercase"}
            color={"gray.400"}
            fontWeight={600}
            bg={"gray.900"}
            p={2}
            pl={4}
            pr={4}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About Me
          </Heading>
          <Heading color="gray.900">Hey!, I'm Devesh Kumar Mishra</Heading>
          <Text display={"none"} id="user-detail-name">
            Devesh Kumar Mishra
          </Text>
          <Text color={"white"} fontSize={"lg"} id="user-detail-intro">
            Aspiring Full Stack Web Developer with proficient Skilled in both
            Frontend and Backend Development for producing the Quality work.
            Quick learner with core knowledge of ReactJS, Chakra UI,
            HTML,CSS,JavaScript,NodeJS, ExpressJS, MongoDB, MERN stack
            technology. Looking forward to applying and enhancing my skills and
            knowledge as a developer. Around 1200+ Coding experience.
          </Text>
          <Grid gap={"1"} templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]}>
            <GridItem>
              <Flex
                alignItems={"center"}
                p="0.5rem"
                color={"white"}
                bg={"blackAlpha.500"}
                w={"12rem"}
                m="auto"
                fontWeight={"bold"}
                borderRadius={"lg"}
                justifyContent={"space-around"}
              >
                <Icon as={BsCode} fontSize={"2rem"} />
                <Text textAlign={"center"} fontSize={"1.2srem"}>
                  1200+ Hours Practical Coding
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                alignItems={"center"}
                p="0.5rem"
                color={"white"}
                bg={"blackAlpha.500"}
                w={"12rem"}
                m="auto"
                fontWeight={"bold"}
                borderRadius={"lg"}
                justifyContent={"space-around"}
              >
                <Icon as={DiCodeigniter} fontSize={"2rem"} />
                <Text textAlign={"center"} fontSize={"1.2srem"}>
                  600+ DSA Problems solved
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                alignItems={"center"}
                p="0.5rem"
                color={"white"}
                bg={"blackAlpha.500"}
                w={"12rem"}
                m="auto"
                fontWeight={"bold"}
                borderRadius={"lg"}
                justifyContent={"space-around"}
              >
                <Icon as={SiMicrosoftacademic} fontSize={"2rem"} />
                <Text textAlign={"center"} fontSize={"1.2srem"}>
                  100+ Hours Soft Skill Development
                </Text>
              </Flex>
            </GridItem>
          </Grid>
          <Heading>
            <TypingText text={"MERN DEVELOPER"} />
          </Heading>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"Devesh Kumar Mishra"}
            src={about}
            fallback={<Skeleton h="30rem" w="20rem"></Skeleton>}
            bg="gray.900"
            objectFit={"cover"}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
