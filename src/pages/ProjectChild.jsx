import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  Center,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HashLink as ReachLink } from "react-router-hash-link";
import ImageOpener from "./ImageOpener";
export default function ProjectChild({ techStack, project }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <Container maxW={"7xl"} className="project-card">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
              color="white"
              className="project-title"
            >
              {project.title}
            </Text>
            <br />
            {/* <Text as={"span"} color={"red.400"}>
              use everywhere!
            </Text> */}
          </Heading>
          <Text color={"white"} className="project-description">
            {project.desc}
          </Text>
          <Box>
            <Heading m="0" p="0">
              Features
            </Heading>
            <Text color="white">{project.feature.join(" | ")}</Text>
          </Box>
          <Flex flexWrap={"wrap"} className="project-tech-stack">
            {techStack?.map((el, i) => {
              return (
                <Center
                  key={i}
                  m={1}
                  p={2}
                  borderRadius="md"
                  bg={"blackAlpha.900"}
                >
                  <Icon
                    as={el.icon}
                    fontSize={["1rem", "1.2rem"]}
                    color={"white"}
                  ></Icon>
                  <Text pl={"0.4rem"} color={"white"}>
                    {el.title}
                  </Text>
                </Center>
              );
            })}
          </Flex>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link
              as={ReachLink}
              _hover={{ bg: "#FF4D05" }}
              to={project.deploy}
              className="project-deployed-link"
              target="_blank"
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                color="white"
                bg={"blackAlpha.900"}
                _hover={{ bg: "red.500" }}
              >
                Live
              </Button>
            </Link>
            <Link
              as={ReachLink}
              _hover={{ bg: "#FF4D05" }}
              to={project.gitRepo}
              className="project-github-link"
              target="_blank"
            >
              <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
                Git Repo
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={1}
            color={"blackAlpha.900"}
          />

          <Box
            onClick={onOpen}
            position={"relative"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            zIndex="10"
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={project.image}
            />
          </Box>
          <ImageOpener
            cancelRef={cancelRef}
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            image={project.image}
            title={project.title}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
