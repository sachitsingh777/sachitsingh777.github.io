import React,{useState}from 'react'

import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const handleToggle = () => settoggle(!toggle);
  return (
    <Flex
    as="nav"
    w="100%"
    mb={8}
    p={8}
    bg={["#26de81", "#26de81", "transparent", "transparent"]}
    color={["white", "white", "#26de81", "#26de81"]}
   align="center"
    justify="space-between"
    wrap="wrap"
    id="nav-menu"
  >
    <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
      {toggle ? <CloseIcon /> : <MenuIcon />}
    </Box>

     <Box
     basis={{ base: "100%", md: "auto" }}
      display={{ base: toggle ? "block" : "none", md: "block" }}
    >
      <Stack
        spacing={8}
        align="center"
        direction={["column", "row", "row", "row"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/" class="nav-link home" >Home</MenuItem>
        <MenuItem to="/About" class="nav-link about"> About </MenuItem>
        <MenuItem to="/Skills"  class="nav-link skills">Skills </MenuItem>
        <MenuItem to="/project" class="nav-link projects"> Project</MenuItem>
        <MenuItem to="/contact" class="nav-link contact"> Contact</MenuItem>
          <Button
            size="sm"
            rounded="md" 
            bg={["white", "white", "#26de81", "#26de81"]}
            color={["#26de81", "#26de81", "white", "white"]}
            _hover={{
              bg: ["#26de81", "#26de81", "#26de81", "#26de81"]
            }}
            class="nav-link resume"
          >
           Resume
          </Button>
  
      </Stack>
    </Box>
  </Flex>
  )
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuItem = ({ children, to = "/" }) => {
  return (
    <Link href={to}>
      <Text display="block">
        {children}
      </Text>
    </Link>
  );
};
export default Navbar