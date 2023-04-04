import { Box, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { HashLink as ReachLink } from "react-router-hash-link";

const Top = () => {
  return (
    <Box
      pos="fixed"
      border={"2px solid gray.900"}
      zIndex={"100"}
      right={"10px"}
      bottom="10px"
    >
      <Link as={ReachLink} to="#top">
        <Icon fontSize={"3rem"} as={FaArrowAltCircleUp} color="white"></Icon>
      </Link>
    </Box>
  );
};

export default Top;
