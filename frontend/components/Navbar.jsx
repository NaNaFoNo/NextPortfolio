import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  useColorMode,
  HStack,
} from '@chakra-ui/react';
import { 
  MoonIcon, 
  SunIcon, 
  HamburgerIcon, 
  CloseIcon 
} from '@chakra-ui/icons';


import { contentNavbar } from '../utils/content'
import { colorSchemes } from '../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const pages =  contentNavbar.pages

    return (
      <>
        <Box
          px={4} 
          bg={useColorModeValue(lightMode.green, darkMode.neutrals[1])} 
          color={useColorModeValue(lightMode.neutrals[9], darkMode.neutrals[8])}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <HStack>
              <Icon as={ contentNavbar.icon } boxSize={'2rem'}/> 
                {/* <GiWolfHowl size={'2em'}/> */} 
                <Box>{contentNavbar.title}</Box>  
              </HStack>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {pages.map((link) => (
                  <Link
                    key={link}
                    px={2}
                    py={1}
                    rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: useColorModeValue(lightMode.neutrals[3], darkMode.neutrals[3]),
                    }}
                    href={ link =='Home' ? '/' : link.toLowerCase() }>
                    {link}
                  </Link>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <HStack spacing={8} alignItems={'center'}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <Avatar size={'md'} src={'/me.jpeg'} />
              </HStack>  
            </Flex>
          </Flex>
        </Box>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {pages.map((link) => (
                <Link
                  key={link}
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue(lightMode.neutrals[3], darkMode.neutrals[3]),
                  }}
                  href={ link =='Home' ? '/' : link.toLowerCase() }>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </>
  )
}

export default Navbar;