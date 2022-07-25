import React from "react";
import Image from 'next/image';
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Stack,
  Badge,
  useColorModeValue,
  Wrap,
  IconButton,
  Link
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'


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
          <Box pos={'absolute'} zIndex={'2'} right={'2'} top={'1'}>
            <Flex flexDir={'column'}>
              <Link href='https://chakra-ui.com' isExternal m={'1'}>
                <IconButton
                  colorScheme='teal'
                  aria-label='Call Segun'
                  size='sm'
                  icon={<ExternalLinkIcon />}
                />
              </Link>
              <Link href='https://chakra-ui.com' isExternal m={'1'}>
                <IconButton
                  colorScheme='teal'
                  aria-label='Call Segun'
                  size='sm'
                  icon={<BsGithub />}
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
              key={tech}
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

