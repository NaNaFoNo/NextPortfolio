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
  Link,
  Icon
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'

import { svgTechIcons } from '../utils/svgIcon'

const TechIcon = ({techName}) => {
  const svgObject= svgTechIcons.find((tech) => tech.name.toLowerCase() == techName.toLowerCase());
  // { svgObject ? console.log('found'): console.log('notfound')}
  
  return (    
    <>
      { svgObject && 
        <>
          <Icon 
            boxSize="10" 
            viewBox="0 0 24 24" 
            fill= {
              svgObject.color == '#000000' ? 
                useColorModeValue('#000000', '#FFF') 
                : 
                svgObject.color
            }
          >
            <path d= {svgObject.path}/>
            <title>{svgObject.name}</title>
          </Icon>
        </>
      }
    </>
  )
}


const ProjectCard = ({ projectData: { name, description, image, stack, github, url }}) => {
  return (
    <Center py={6} transform="scale(1.0)" transition="0.3s ease-in-out" _hover={{
      transform: 'scale(1.05)',
    }}>
      
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'dark-lg'}
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
              {url && 
                <Link href={url} isExternal m={'1'}>
                  <IconButton
                    colorScheme='blue'
                    aria-label='Call Segun'
                    size='sm'
                    icon={<ExternalLinkIcon size={'1.2rem'}/>}
                    transform="scale(1.0)" 
                    transition="0.3s ease-in-out" 
                    _hover={{
                      transform: 'scale(1.2)',
                    }}
                  />
                </Link>
              }
              
              <Link href= {github} isExternal m={'1'}>
                <IconButton
                  colorScheme='blue'
                  aria-label='Call Segun'
                  size='sm'
                  icon={<BsGithub size={'1.2rem'}/>}
                  transform="scale(1.0)" 
                  transition="0.3s ease-in-out" 
                  _hover={{
                    transform: 'scale(1.2)',
                  }}
                />
              </Link>
            </Flex>
          </Box>
          <Image
            src={image}
            layout={'fill'}
            objectFit={'cover'}
            priority={true}
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
        <Wrap align={'center'} justify={'space-around'} direction={'row'} mt={6} h={'auto'} >
          {stack.map((tech, index) => (
              <TechIcon techName= {tech} key={index}/>
          ))}
          
        </Wrap>
      </Box>
    </Center>      
  )
}
  
export default ProjectCard

