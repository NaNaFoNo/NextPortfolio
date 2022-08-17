import React from 'react'
import {
  Wrap,
  Icon
} from '@chakra-ui/react';

import TechIcon from './TechIcon';


const Languages = ({ languages }) => {
  const entries = Object.entries(languages)
  const languageStack = Object.keys(languages)
  const languageSum = Object.values(languages).reduce((a, b) => a + b)
  

  return (
    <Wrap align={'center'} justify={'space-around'} direction={'row'} mt={6} h={'auto'} >
      {languageStack?.map((language, index) => (
        <TechIcon techName= {language} key={index}/>
      ))}
    </Wrap>
  )
}

export default Languages