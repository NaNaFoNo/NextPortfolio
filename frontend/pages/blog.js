import React from 'react';
import { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Image,
  Text,
  Divider,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

import { contentBlog } from '../utils/content'
import ProjectsDataService from '../utils/projects'


const BlogPage = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    retrieveBlogs();
  }, [blogs])

  const retrieveBlogs = () => {
    ProjectsDataService.getAllBlogs()
      .then(response => {
        setBlogs(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  if(!blogs) return <div>Loading...</div>;

  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">{ contentBlog.title }</Heading>
      {blogs.slice(0, 1).map((blog) => (
        <LinkBox
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ sm: 'row', base: 'column' }}
          justifyContent="space-between"
          key={blog._id}>
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%"
            >

                <LinkOverlay href={ blog.url } isExternal >
                <Image
                  transform="scale(1.0)"
                  transition="0.3s ease-in-out"
                  borderRadius="lg"
                  src={ blog.image }
                  alt="writing Image"
                  objectFit="contain"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </LinkOverlay>
                
                
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}>
            <Heading marginTop="1">
              <LinkOverlay href={ blog.url } isExternal >
                { blog.caption }
              </LinkOverlay>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg">
                { blog.description }
            </Text>
          </Box>
        </LinkBox>
      ))}
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        { blogs.slice(1).map((blog) => (
          <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }} key={blog._id}>
            <LinkBox w="100%">
              <Box borderRadius="lg" overflow="hidden"> 
                <LinkOverlay href={ blog.url }>
                  <Image
                    transform="scale(1.0)"
                    src={ blog.image }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  /> 
                </LinkOverlay>
              </Box>
              <Heading fontSize="xl" marginTop="2">
                  { blog.caption }
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                { blog.description }
              </Text>
            </LinkBox>
          </WrapItem>
        ))}
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2" mt="5">About this Blog</Heading>
        { contentBlog.blogDescription.map((p, index) => (
          <Text as="p" fontSize="lg" key={index}>
            {p}
          </Text>
        ))}
      </VStack>
    </Container>
  );
};

export default BlogPage;