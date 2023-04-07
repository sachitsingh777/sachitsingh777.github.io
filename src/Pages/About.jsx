import React from 'react'
import {Box, Flex, HStack, Image, Text} from "@chakra-ui/react"
import coder from './Image/coder.png'
const About = () => {
  return (
    <Flex
    w="100%"
    h="100vh"
    mb={8}
    p={8}
  
   align="center"
     
      margin={"auto"}
    wrap="wrap"
    justifyContent="space-around"
    >
    
     <Box borderRadius='20px 80px ' boxShadow='base' p='6' rounded='md' bg='white'>
         <Text w="300px" color="#26de81">"As a skilled web developer, I bring expertise in designing and building 
         user-friendly websites with a focus on functionality and aesthetics.
          With a strong background in HTML, CSS, JavaScript, and various 
          content management systems, I am able to deliver high-quality web
           solutions that meet the needs of businesses and individuals alike.
            My passion for coding and commitment to staying up-to-date with 
            the latest technologies make me a valuable asset to any team seeking
             to enhance their online presence."</Text>
     </Box>
    <Box  h={"300px"} border={"1px solid green"}>
      <Image w={"100%"} h={"300px"} src={coder} alt="about"/>
    </Box>
    </Flex>
  )
}

export default About