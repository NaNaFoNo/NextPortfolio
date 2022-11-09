import React from 'react';
import { 
  Box,
  Text, 
  useColorModeValue,
 } from '@chakra-ui/react';

import { colorSchemes } from '../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue(lightMode.green, darkMode.neutrals[1])} 
      color={useColorModeValue(lightMode.neutrals[9], darkMode.neutrals[8])}
      height={'5rem'}
      justifyContent={'center'}
    >
      <Text align={'center'} pt={'4'}>Made with &#x1F9E1; by NaNaFo 2022</Text>  
    </Box>
  )
}

export default Footer