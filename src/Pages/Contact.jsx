import { Box, Button, Flex, Input, InputGroup, InputLeftAddon, Textarea, VStack} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {SiGmail} from "react-icons/si";
import {FcPhone} from "react-icons/fc";
import {FaMapMarkerAlt,FaLinkedinIn} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
const Contact = () => {
 
  return (
    <Flex  id="contact"> 
      <Box>
        <VStack>
          <Button w="200" h="100">
          <Flex>
            <Box > <FcPhone size="32px" />Phone:</Box>
            <Box id="contact-phone">+91 8982934227</Box>
          </Flex>
          </Button>
          <Button>
          <Flex>
            <Box><SiGmail size="32px" color="red" />Email:</Box>
            <Box id="contact-email">Sachitsinghbais777@gmail.com</Box>
          </Flex>
          </Button>
          <Button>
          <Flex>
            <Box><FaMapMarkerAlt  size="32px" color="red" />Address:</Box>
            <Box>Singrauli(M.P)</Box>
          </Flex>
          <Flex>
            <Box  id="contact-linkedin"><FaLinkedinIn size="32px" color="blue" />Address:</Box>
          </Flex>
          <Flex>
            <Box id="contact-github"><BsGithub  size="32px"  />Address:</Box>
         
          </Flex>
          </Button>
        </VStack>
      </Box>
      <Box>
        <Input type="text" placeholder='Name'/>
        <Input type="email" placeholder='Email'/>
        <InputGroup>
    <InputLeftAddon children="+91" />
    <Input type='tel' placeholder='phone number' />
  </InputGroup>
        <Textarea placeholder='message'>

        </Textarea>
<Button
  size='md'
  height='48px'
  width='120px'
  border='2px'
  borderColor='green.500'
>
  Button
</Button>
      </Box>
    </Flex>
  )
}

export default Contact