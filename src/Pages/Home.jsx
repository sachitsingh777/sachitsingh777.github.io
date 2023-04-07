import React from 'react'
import {Box, Flex, Heading, Image, Text, VStack} from "@chakra-ui/react"
import resume from "./Image/resume.jpg"


   
const Home = () => { 
    const outerBoxStyles = {
      boxSize: '350px',
      p: '10',
      background:
        'url() center/cover no-repeat',
    }
  return (
   <Flex 
   w="100%"
   h="100vh"
   mb={8}
   p={8}
  color ={["#26de81", "#26de81", "transparent", "transparent"]}
   bg={["white", "white", "#26de81", "#26de81"]}
  align="center"
   justify="space-around"
   wrap="wrap"
   id="home"
   >
    <Box  borderRadius='20px 80px ' boxShadow='base' p='6' rounded='md' color ={["#26de81", "#26de81", "white", "white"]} bg={["white", "white", "#26de81", "#26de81"]} border='5px solid white'>
     <VStack>
      <Heading >I'm</Heading>
      <Heading  id="user-detail-name">Sacchitanand Singh</Heading>
      <Heading  id="user-detail-intro" ><a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&color=F7F4DE&width=435&lines=Full+Stack++Web+Developer;Problem+Solver;coder" alt="Typing SVG" /></a></Heading></VStack>
    </Box>
    <Box sx={outerBoxStyles} >
   <Image 
   class="home-img"
   borderRadius='20px 80px '
   boxSize='300px'
   src={resume} alt="sacchitanand Singh"/>
        
    </Box>
   </Flex>
  )
}

export default Home