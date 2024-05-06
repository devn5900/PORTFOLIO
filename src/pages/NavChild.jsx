import { Box, Link, Flex, Heading, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as ReachLink } from "react-router-hash-link";
import { head, linkTheme } from "../theme/navbar";
import Devesh_Kumar_Mishra_Resume from "../files/Devesh_Kumar_Mishra_Resume.pdf";
const NavChild = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(location.hash);
  }, [location]);
  const navItem = [
    { id: 1, path: "#home", title: "Home", class: "nav-link home" },
    { id: 2, path: "#about", title: "About", class: "nav-link about" },
    { id: 3, path: "#skills", title: "Skills", class: "nav-link skills" },
    {
      id: 4,
      path: "#exprience",
      title: "Experience",
      class: "nav-link exprience",
    },
    { id: 5, path: "#projects", title: "Projects", class: "nav-link projects" },
    { id: 6, path: "#contact", title: "Contact", class: "nav-link contact" },
  ];

  const openToNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1JqqV7I-lz5vjhj5Q48pTuRFDD01X_Rg7/view?usp=sharing"
    );
    // window.download(Devesh_Kumar_Mishra_Resume);
  };
  return (
    <Box pt="1" pb="1">
      <Flex
        minWidth="max-content"
        alignItems={"center"}
        justifyContent={"space-around"}
        gap="2"
      >
        <Flex p="0">
          <Heading color={"white"} {...head}>
            Devesh
          </Heading>
          <Heading {...head.child}> Mishra</Heading>
        </Flex>
        <Flex gap="2" display={{ base: "none", md: "none", lg: "flex" }}>
          {navItem?.map((el) => {
            return (
              <Link
                key={el.id}
                as={ReachLink}
                id={el.title == "Resume" ? "resume-link-1" : ""}
                {...(active == el.path
                  ? { ...linkTheme, bg: "#FF4D05" }
                  : { ...linkTheme })}
                _hover={{ bg: "#FF4D05" }}
                to={el.path}
                target={el.title == "Resume" ? "_blank" : "_self"}
                className={el.class}
              >
                {el.title}
              </Link>
            );
          })}

          <Link
            as={ReachLink}
            id={"resume-link-1"}
            to={Devesh_Kumar_Mishra_Resume}
            download={true}
            {...(active == "#resume"
              ? { ...linkTheme, bg: "#FF4D05" }
              : { ...linkTheme })}
            className="nav-link resume"
            _hover={{ bg: "#FF4D05" }}
            // onClick={openToNewTab}
            target="_blank"
          >
            <Button
              rounded={"full"}
              id={"resume-button-1"}
              _hover={{ bg: "#FF4D05" }}
              color="#FF4D05"
              px={6}
            >
              Resume
            </Button>
          </Link>
        </Flex>
        {/* <Flex display={{ base: "flex", md: "flex", lg: "none" }}>
          <Menu>
            <MenuButton
              onClick={() => {
                setOpen(!isOpen);
              }}
              bgColor="transparent"
            >
              <Icon
                display={{ base: "flex", md: "flex", lg: "none" }}
                as={!isOpen ? HamburgerIcon : CloseIcon}
                color="white"
                fontSize="1.4rem"
              ></Icon>
            </MenuButton>
            <MenuList bgColor="gray.900">
              <Flex
                gap="2"
                direction={"column"}
                display={{ base: "flex", md: "flex", lg: "none" }}
              >
                {navItem?.map((el) => {
                  return (
                    <Link
                      key={el.id + 1}
                      as={ReachLink}
                      id={el.title == "Resume" ? "resume-link-1" : ""}
                      {...(active == el.path
                        ? { ...linkTheme, bg: "#FF4D05" }
                        : { ...linkTheme })}
                      _hover={{ bg: "#FF4D05" }}
                      to={el.path}
                      className={el.class}
                      target={el.title == "Resume" ? "_blank" : "_self"}
                      onClick={() => {
                        setOpen(!isOpen);
                      }}
                      // {...(el.title == "Resume" ? "download" : "")}
                    >
                      {" "}
                      <MenuItem bgColor="transparent">{el.title}</MenuItem>
                    </Link>
                  );
                })}
              </Flex>
            </MenuList>
          </Menu>
        </Flex> */}
        {/* <Icon
          display={{ base: "flex", md: "flex", lg: "none" }}
          as={!isOpen ? HamburgerIcon : CloseIcon}
          onClick={() => {
            setOpen(!isOpen);
          }}
          color="white"
          fontSize="1.4rem"
        ></Icon> */}
      </Flex>
    </Box>
  );
};

export default NavChild;
