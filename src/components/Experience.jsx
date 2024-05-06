import { Box, Flex } from "@chakra-ui/react";

const Experience = () => {
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
        Experience
      </Flex>
    </Box>
  );
};

export default Experience;
