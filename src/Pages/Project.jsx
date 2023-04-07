import { Box, Button, Card, CardBody, CardFooter, Center, Flex, Grid, Heading, Image, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import IKEA from "./Image/IKEA.png"
import APPLE from "./Image/APPLE.png"
import MYNTRA from "./Image/MYNTRA.png"
const Project = () => {
  const data=[
    {
      id:1,
      name:"IKEA",
  image:{IKEA},
      description:"IKEA specializes in low-priced goods, sold whenever possible in compact “flat-pack” form for in-home assembly by the customer",
      live:"https://l-decor-16a3c9.netlify.app/landpage.html",
      code:"",
    },
    {
      id:2,
      name:"MYNTRA",
      image:{MYNTRA},
      description:"Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products",
      live:"https://curious-frangipane-4abd87.netlify.app/",
      code:"",
    },
    {
      id:3,
      name:"APPLE TV +",
      image:{APPLE},
      description:"Apple TV+ is a streaming service that lives inside the Apple TV app",
      live:"https://starlit-dasik-b30d22.netlify.app/",
      code:"",
    },
  ]

 
  return (
   <Grid templateColumns={"repeat(1,1fr)"}>
 
      {data?.map((item)=>(
        <Box key ={item.id}>
        <Center>
         <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={item.image}
    alt={item.name}
  />

  <Stack>
    <CardBody>
      <Heading size='md' class="project-title">{item.name}e</Heading>

      <Text py='2' class="project-description"
>{item.description}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue' class="project-deployed-link" >
        {item.live}
      </Button>
      <Button variant='solid' colorScheme='blue' class="project-github-link">
       {item.code}
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Center>
   </Box>
      ))}

   </Grid>
  )
}

export default Project