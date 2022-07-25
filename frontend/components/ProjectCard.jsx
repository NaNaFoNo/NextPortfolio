import React from "react";
import Image from 'next/image';
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Wrap,
  IconButton,
  Link
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'

import TechIcon from "./TechIcon";


const ProjectCard = ({ projectData: { name, description, image, stack }}) => {
  return (
    <Center py={6}>
      
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
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
          <Box pos={'absolute'} zIndex={'2'} right={'2'} top={'1'}>
            <Flex flexDir={'column'}>
              <Link href='https://chakra-ui.com' isExternal m={'1'}>
                <IconButton
                  colorScheme='blue'
                  aria-label='Call Segun'
                  size='sm'
                  icon={<ExternalLinkIcon size={'1.2rem'}/>}
                />
              </Link>
              <Link href='https://chakra-ui.com' isExternal m={'1'}>
                <IconButton
                  colorScheme='blue'
                  aria-label='Call Segun'
                  size='sm'
                  icon={<BsGithub size={'1.2rem'}/>}
                />
              </Link>
            </Flex>
          </Box>
          <Image
            src={image}
            layout={'fill'}
            objectFit={'cover'}
          />
        </Box>
        <Stack>
          
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
        <Wrap align={'center'} justify={'space-around'} direction={'row'} mt={6} h={'70px'}>
          {stack.map((tech) => (
              <TechIcon techName= {tech}/>
          ))}
          
        </Wrap>
      </Box>
    </Center>      
  )
}
  
export default ProjectCard

