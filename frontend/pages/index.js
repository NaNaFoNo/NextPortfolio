import { useState, useEffect } from 'react'



import ProjectsDataService from '../utils/projects'
import {
  SimpleGrid,
  GridItem,
  Box,
  Container,
  Image,
  Heading,
  Text,
  Highlight,
} from '@chakra-ui/react';


import ProjectCard from '../components/ProjectCard'

const heading = [ "Welcome,", "I'm Andreas Vieten.", "A Graduated", "Blockchain Developer", "@Udacity"]

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    retrieveProjects();
  }, [])

  const retrieveProjects = () => {
    ProjectsDataService.getAll()
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  

  return (
    <SimpleGrid
      columns={[1, null, 2]}
      gap={6}
      width={'100%'}
      minHeight={'86vh'}
    >
      <GridItem colSpan={1} pos={'relative'} display='flex'>
        <Box h='100%' w='65%' pos={'absolute'} zIndex={'-1'} bg='gray.700' clipPath={'polygon(0 0, 46% 0, 79% 100%, 0% 100%)'}>
          
        </Box>
        <Container justifyContent='space-around' centerContent>
          <Image
            src={'/home.jpg'}
            objectFit={'cover'}
            w={'80%'}
            maxHeight={'80%'}
            borderRadius={'20px'}
          />
        </Container>
      </GridItem>
      <GridItem colSpan={1} display='flex'>
        <Container justifyContent='center' centerContent>
          {heading.map((text) => (
            <Heading>
              <Highlight
                query={['Andreas Vieten', 'Blockchain Developer']}
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100', textTransform: 'uppercase' }}
              >
                {text}
              </Highlight>
            </Heading>
          ))}
          
          <Text pt={12}>
              Formerly Automotive Engineer turning Blockchain Developer. Leaving my comfort zone 
              and taking an asymmetric bet on the future. If you want to know more 
              about my journey into the rabbit hole, check out my site.
          </Text>
        </Container>
      </GridItem>

    </SimpleGrid>
  )
}
