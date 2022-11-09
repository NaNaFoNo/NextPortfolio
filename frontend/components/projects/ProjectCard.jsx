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
  Icon,
  IconButton,
  Link
} from '@chakra-ui/react';

import ProjectData from "./ProjectData";

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaVideo, FaLaptopCode, FaBookReader, FaGithub } from 'react-icons/fa'

import { colorSchemes } from '../../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;


const ProjectCard = ({ projectData: { name, description, image_url, topics, git_url, homepage_url, languages, created, updated, category }}) => {
  const colorAccent = useColorModeValue(lightMode.blue, darkMode.orange)
  const neutrals = (l, d) => {
    return useColorModeValue(lightMode.neutrals[l], darkMode.neutrals[d])
  }

  let categoryIcon 
  if (category == 'personal') {
    categoryIcon = FaLaptopCode
  } else if (category == 'education') {
    categoryIcon = FaBookReader
  } else if (category == 'tutorial') {
    categoryIcon = FaVideo
  }

  return (
    <Center transform="scale(1.0)" transition="0.3s ease-in-out" _hover={{
      transform: 'scale(1.05)',
    }}>
      
      <Box
        maxW={'445px'}
        w={'full'}
        bg={neutrals(1,1)}
        boxShadow={'dark-lg'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        minWidth={'389px'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Box
            display={'flex'}
            pos={'absolute'}
            left={'3'} 
            top={'2'}
            zIndex={'2'}
            p={1.5}
            borderRadius={'50%'}
            bg={useColorModeValue('white', 'gray.800')}
          >
            <Icon as={categoryIcon} w={4} h={4} />   
          </Box>
          <Box pos={'absolute'} zIndex={'2'} right={'2'} top={'1'}>
            <Flex flexDir={'column'}>
              {homepage_url && 
                <Link href={homepage_url} isExternal m={'1'}>
                  <IconButton
                    bg= {colorAccent}
                    color= 'black'
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
              
              <Link href= {git_url} isExternal m={'1'}>
                <IconButton
                  bg= {colorAccent}
                  color= 'black'
                  aria-label='Call Segun'
                  size='sm'
                  icon={<FaGithub size={'1.2rem'}/>}
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
            src={image_url ? image_url : 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80'}
            layout={'fill'}
            objectFit={'cover'}
            priority={true}
          />
        </Box>
        <Stack>
          <Heading
            color={neutrals(8,8)}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {name.replace(/([A-Z])/g, ' $1').trim()}
          </Heading>
          <Text color={neutrals(7,7)}>
            {description}
          </Text>
        </Stack>

        <ProjectData projectData={{topics, languages, created, updated}}/>
        
      </Box>
    </Center>      
  )
}
  
export default ProjectCard

