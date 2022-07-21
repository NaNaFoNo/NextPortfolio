import React from "react";
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Wrap
} from '@chakra-ui/react';


const ProjectCard = ({ projectData: { name, description, image, stack }}) => {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={image}
            layout={'fill'}
            objectFit={'cover'}
          />
        </Box>
        <Stack>
          <Box
            w='125px'
            h='20px'
            pos='relative'
          >
            <Image 
              src={'https://pyheroku-badge.herokuapp.com/?app=travel-app-fend21&style=plastic'}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {name}
          </Heading>
          <Text color={'gray.500'}>
            {description}
          </Text>
        </Stack>
        <Wrap align={'center'} justify={'center'} direction={'row'} mt={6} h={'70px'}>
          {stack.map((tech) => (
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.200', 'gray.800')}
              fontWeight={'400'}>
              {tech}
              </Badge>
          ))}
        </Wrap>
      </Box>
    </Center>      
  )
}
  
export default ProjectCard

