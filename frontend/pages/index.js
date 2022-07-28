import { useState, useEffect } from 'react'



import ProjectsDataService from '../utils/projects'
import {
  Grid,
  GridItem,
  Box,
  Container,
  Image,
  Heading,
  Text,
  Highlight,
} from '@chakra-ui/react';

const heading = [ "Welcome,", "I'm Andreas Vieten.", "Graduated", "Blockchain-/", "Web-Developer", "@Udacity"]

export default function Home() {
  return (
    <Grid
      templateAreas={[`"b""a"`, null, `"a b"`]}
      gridTemplateColumns={['1fr', null,'repeat(2, 1fr)']} 
      width={'100%'}
      minHeight={'86vh'}
    >
      <GridItem colSpan={1} pos={'relative'} display='flex' area={'a'}>
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
      <GridItem colSpan={1} display='flex' area={'b'}>
        <Container justifyContent='center' centerContent mt={4}>
          {heading.map((text) => (
            <Heading size={['lg', null, 'lg', 'xl']}>
              <Highlight
                query={['Andreas Vieten', 'Blockchain-/','Web-Developer']}
                styles={{ color:'#f79412', textTransform: 'uppercase' }}
              >
                {text}
              </Highlight>
            </Heading>
          ))}
          
          <Text p={6} mt={4}>
              Formerly Automotive Engineer turning Blockchain Developer. Leaving my comfort zone 
              and taking an asymmetric bet on the future. If you want to know more 
              about my journey into the rabbit hole, check out my site.
          </Text>
        </Container>
      </GridItem>

    </Grid>
  )
}
