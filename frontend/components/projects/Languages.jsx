import React from 'react'
import {
  Wrap,
  Badge,
  VisuallyHidden,
  Box
} from '@chakra-ui/react';

import TechIcon from './TechIcon';


const Languages = ({ languages }) => {
  const entries = Object.entries(languages)
  const languageStack = Object.keys(languages)
  const languageSum = Object.values(languages).reduce((a, b) => a + b)
  

  return (
    <>
    <Badge width={'100%'} p={0} colorScheme={'gray'}>
      <Badge width={'40%'} bg={'#F7DF1E'} textColor={'black'} textAlign={'center'}> 40% </Badge>
      <Badge width={'40%'} bg={'#E34F26'} textColor={'black'} textAlign={'center'}> 40% </Badge>
      <Badge width={'20%'} bg={'#CC6699'} textColor={'black'} textAlign={'center'}> 20% </Badge>
    </Badge>
    <Wrap align={'center'} justify={'space-around'} direction={'row'} mt={6} h={'auto'} >
      {languageStack?.map((language, index) => (
        <TechIcon techName= {language} key={index}/>
      ))}
    </Wrap>
    </>
  )
}

export default Languages