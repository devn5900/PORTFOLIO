import {
  Avatar,
  Box,
  chakra,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGitSquare } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";
import GithubStreak from "./GithubStreak";
export default function GithubChild() {
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "2Xl" }} margin={"auto"}>
        <chakra.h1
          py={5}
          fontSize={[28, 48]}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={"white"}
          textTransform={"uppercase"}
          bg={"gray.900"}
          p={2}
          pl={4}
          pr={4}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
          Github Stat
        </chakra.h1>
      </Box>
      <Flex
        direction={"column"}
        alignItems={"center"}
        spacing={"20"}
        mt={16}
        mb={16}
        mx={"auto"}
        bg={"blackAlpha.700"}
        color={"white"}
        p="1rem"
        borderRadius={"sm"}
      >
        <Box>
          <Heading p="1rem"> Github Calender</Heading>
          <GitHubCalendar username="devn5900" />
        </Box>
        <Divider m="1rem" />
        <Box>
          <Heading p="1rem"> Github Streak</Heading>
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=devn5900&theme=vue&hide_border=true"
          ></Image>
          {/* <GithubStreak /> */}
        </Box>
        <Divider m="1rem" />
        <Box>
          <Heading p="1rem"> Github Top Language</Heading>
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=devn5900"
          ></Image>
        </Box>
        <Divider m="1rem" />
        <Box>
          <Heading p="1rem"> Github Stats</Heading>
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=devn5900&show_icons=true&theme=vue&hide_border=true"
          ></Image>
        </Box>
      </Flex>
      <Box>
        <Icon as={FaGitSquare} color={"blackAlpha.900"} fontSize={"4rem"} />
      </Box>
    </Flex>
  );
}
