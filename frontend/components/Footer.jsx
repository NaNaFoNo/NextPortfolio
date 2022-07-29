import React from 'react';
import { 
  Box,
  Text, 
  useColorModeValue,
 } from '@chakra-ui/react';


const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      height={'5rem'}
      justifyContent={'center'}
    >
      <Text align={'center'} pt={'4'}>Made with &#x1F9E1; by NaNaFo 2022</Text>  
    </Box>
  )
}

export default Footer