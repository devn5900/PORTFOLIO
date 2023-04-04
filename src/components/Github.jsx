import React from "react";
import GithubChild from "../pages/GithubChild";
import { Box } from "@chakra-ui/react";

const Github = () => {
  return (
    <Box
      bg="#FF4D05"
      p={["1.5rem", "1.5rem", "1.5rem", "3rem"]}
      alignItems={["space-around", "center"]}
      minH={"100vh"}
    >
      <GithubChild />
    </Box>
  );
};

export default Github;
