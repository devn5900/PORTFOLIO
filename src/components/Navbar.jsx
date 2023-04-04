import { Box } from "@chakra-ui/react";
import React from "react";
import NavChild from "../pages/NavChild";

const Navbar = () => {
  return (
    <Box
      id="nav-menu"
      bgColor={"blackAlpha.500"}
      pos={"sticky"}
      top="0"
      zIndex="1000"
    >
      <NavChild />
    </Box>
  );
};

export default Navbar;
