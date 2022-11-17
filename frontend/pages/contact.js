import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Text,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
    Alert,
    AlertIcon,
  } from '@chakra-ui/react';

import React from 'react';
import { useState, useEffect } from 'react'
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import PageHeading from '../components/PageHeading';
import { colorSchemes } from '../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;




export default function ContactFormWithSocialButtons() {
  const colorAccent = useColorModeValue(lightMode.blue, darkMode.orange)

  const { hasCopied, onCopy } = useClipboard('vietenandreas+pf@gmail.com');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [failed, setFailed] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
    let data = {
        name,
        email,
        message
    }
    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setFailed(true)
      }
    })
  }

  useEffect(() => {
    if (submitted === true) {
      setTimeout(() => {
        setSubmitted(false)
      }, 3000);
    }
    if (failed === true) {
      setTimeout(() => {
        setFailed(false)
      }, 3000);
    }
  }, [submitted, failed])
  

  return (
    
    <>
      <Box p={{ base:'2rem 4rem' , md: '4rem 8rem'}} bg={useColorModeValue(lightMode.neutrals[2], darkMode.neutrals[2])}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <PageHeading page={'contact'} />

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: colorAccent,
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://github.com/NaNaFoNo" isExternal>
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: colorAccent,
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://twitter.com/NaNaFo6" isExternal>
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    _hover={{
                      bg: colorAccent,
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/andreas-vieten/" isExternal>
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: colorAccent,
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue(lightMode.neutrals[0], darkMode.neutrals[1])}
                borderRadius="lg"
                p={8}
                color={useColorModeValue(lightMode.neutrals[8], darkMode.neutrals[8])}
                shadow="base">
                <Text fontSize='2xl' color={colorAccent} as='kbd' >
                  {'{' }
                  <br />   
                </Text>
                <VStack spacing={5} mt={'10px'}>
                  <FormControl pl={'1rem'} isRequired>
                    <FormLabel  as={'kbd'} color={colorAccent}>name:</FormLabel>

                    <InputGroup >
                      <InputLeftElement >
                        <BsPerson />
                      </InputLeftElement>
                      <Input type="text" name="name" value={name} placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}}/>
                    </InputGroup>
                  </FormControl>

                  <FormControl pl={'1rem'} isRequired>
                    <FormLabel  as={'kbd'} color={colorAccent}>email:</FormLabel>

                    <InputGroup>
                      <InputLeftElement >
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Your Email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl pl={'1rem'} isRequired>
                    <FormLabel as={'kbd'} color={colorAccent}>message:</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      value={message}
                      onChange={(e)=>{setMessage(e.target.value)}}
                    />
                    
                  </FormControl>
                  <Text fontSize='2xl' color={colorAccent} as='kbd' alignSelf={'start'}>
                      {'}' }
                  </Text>

                  <Button
                    bg={useColorModeValue(lightMode.neutrals[8], darkMode.neutrals[3])}
                    color="white"
                    _hover={{
                      bg: colorAccent,
                    }}
                    isfullwidth="true"
                    onClick={(e)=>{handleSubmit(e)}}>
                    Send Message
                  </Button>
                  {submitted && (
                    <Alert status='success'>
                      <AlertIcon />
                      Message submitted!
                    </Alert>
                  )}
                  {failed && (
                    <Alert status='error'>
                      <AlertIcon />
                      An error occured while sendign your message 
                    </Alert>
                  )}
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </>
  );
}