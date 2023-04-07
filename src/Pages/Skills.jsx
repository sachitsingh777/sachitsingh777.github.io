import React from 'react'
import HTML from "./Image/HTML.png"
import CSS from "./Image/CSS.png"
import REACTJS from "./Image/REACTJS.png"
import REDUX from "./Image/REDUX.png"
import typescript from "./Image/typescript.png"
import node from "./Image/node.png"
import JAVASCRIPT from "./Image/JAVASCRIPT.jpg"
import CHAKRA from "./Image/CHAKRA.jpg"
import {Flex,Image,GridItem, Text, Grid} from "@chakra-ui/react"
const Skills = () => {
  return (
    <Grid   w="80%"
    mr="100px"
    ml="250px"
    p={8}
    templateColumns='repeat(3, 1fr)' gap={20}
   align="center"
    justify="space-around"
    >
     <GridItem 
     w="30%" boxShadow= {" #EA3C17  1.95px 1.95px 2.6px"} 
      rounded='md' >
        <Image w="200px" src={HTML} alt=""/>
        <Text>HTML</Text>
     </GridItem>
     <GridItem w="30%">
        <Image w="200px" src={CSS} alt=""/>
        <Text>CSS</Text>
     </GridItem>
     <GridItem w="30%">
        <Image w="200px"src={JAVASCRIPT} alt=""/>
        <Text>JavaScript</Text>
     </GridItem>
     <GridItem w="30%">
        <Image w="200px"src={REACTJS} alt=""/>
        <Text>React</Text>
     </GridItem>
     <GridItem w="30%">
        <Image w="200px"src={REDUX} alt=""/>
        <Text>Redux</Text>
     </GridItem>
     <GridItem w="30%">
        <Image w="200px"src={CHAKRA} alt=""/>
        <Text>Chakra UI</Text>
     </GridItem>
     <GridItem w="30%">
        <Image w="200px"src={typescript} alt=""/>
        <Text>TypeScript</Text>
     </GridItem>
     <GridItem w="30%">
        <Image w="200px"src={node} alt=""/>
        <Text>Node JS</Text>
     </GridItem>
    
    </Grid>
  )
}

export default Skills