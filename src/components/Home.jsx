import { Box, Divider, Flex, Image, Skeleton } from "@chakra-ui/react";
import React from "react";
import TypingText from "../pages/TypingText";
import TypeWriterCode from "../css/TypeWriterCode.css";
import Devesh from "../images/Devesh.png";
import HomeLeft from "../pages/HomeLeft";
const Home = () => {
  const text = ` <span class='key''> import</span> 
     <span class='name''>SoftwareDeveloper </span> 
     <span class='key''>  from </span>
      <span class='ohter''>  'India'; </span> <br/>   <span class='key''> class</span>
          <span class='name''>Bio </span>
            <span class='key''> extends</span> 
             <span class='name''>SoftwareDeveloper </span> <span class="white" >{</span> <br/> 
              &nbsp; &nbsp;
               <span class='ohter''> name     = 'Devesh Kumar Mishra';  </span>
             <br/>  
                 &nbsp; &nbsp;  
                  <span class='ohter''>title    = 'Student' || 'Full Stack Web Developer';  </span>
                <br/>  &nbsp; &nbsp;
                <span class='ohter''>address = 'Balrampur, U.P.';  </span>
                <br/>  &nbsp; &nbsp; 
                  <span class='ohter''>   availability = 'Learning !!';</span>
              <br/>    <span class="white" >}</span>  <br/>   
               <span class='key''> class</span> 
     <span class='name''>Skills </span> 
     <span class='key''>  extends </span>
      <span class='name''>  SoftwareDeveloper</span>
                 <span class="white" >{</span> <br/>  &nbsp; &nbsp; 
                    <span class='ohter''>  frontend  = ['JavaScript', 'HTML', 'CSS', 'React',   <br/> &nbsp; &nbsp; 'Redux'];</span>    <br/> &nbsp; &nbsp;
                    <span class='ohter''>     ui = ['Chakra-Ui' , 'CSS'];</span>  
                  <br/>  <span class="white" >}</span> `;
  return (
    <Box
      pos="relative"
      mt={"2rem"}
      minH="90vh"
      mb={{ base: "3rem", md: "0" }}
      overflow={"hidden"}
      id="top"
    >
      <Flex
        id="home"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        alignItems="center"
        justifyContent={"space-evenly"}
      >
        <HomeLeft />
        <Flex
          borderRadius={"1rem"}
          w={{ base: "97%", md: "lg" }}
          h={{ base: "28rem", md: "34rem" }}
          direction={"column"}
          alignItems="center"
          fontSize={{ sm: "0.6rem", md: "1.3rem" }}
          boxShadow="xs"
          bgColor={"gray.900"}
          pt="3rem"
        >
          <Box>
            <TypingText text={text} />
          </Box>
          <Box
            zIndex="1"
            position="absolute"
            backdropFilter="auto"
            backdropBlur="1px"
            boxShadow={"lg"}
            p="1rem"
          >
            <Image
              objectFit="contain"
              filter={""}
              src={Devesh}
              fallback={<Skeleton h="30rem" w="20rem"></Skeleton>}
              alt="Devesh Kumar Mishra"
              className="home-img"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
