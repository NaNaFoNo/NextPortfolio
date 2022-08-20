import React from 'react'
import {
  Wrap,
  Box
} from '@chakra-ui/react';

import { svgTechIcons } from '../../utils/svgIcon'
import TechIcon from './TechIcon';


const Languages = ({ languages }) => {
  const sortedLanguages = Object.fromEntries(
    Object.entries(languages).sort(([,a],[,b]) => b-a)
  );

  let LangData = []

  const langValues = Object.values(sortedLanguages)
  const langSum = langValues.reduce((a, b) => a + b)
  const data = Object.keys(sortedLanguages).map((lang, index) => {
    const svgObject= svgTechIcons.find((tech) => tech.name.toLowerCase() == lang.toLowerCase());
    let obj = {}

    obj.language = lang
    obj.stat = Math.round(langValues[index] / langSum * 100)
    obj.color = svgObject.color
    LangData.push(obj)
  })
 
  return (
    <>
    <Box display={'flex'} flexDir={'row'} width={'100%'} p={0} bg={'gray'} borderRadius='xl' textColor={'black'} textAlign={'center'}>
      {LangData?.map((obj, index) => (
        <Box 
          key={index}
          width={obj.stat +'%'} 
          bg={obj.color}  
          borderLeftRadius={index == 0 && 'xl' }
          borderRightRadius={index == LangData.length - 1 && 'xl' }
        >
          {  obj.stat > 5 ? obj.stat +'%' : ''}
        </Box>
      ))
      }
    </Box>
    <Wrap align={'center'} justify={'space-around'} direction={'row'} mt={6} h={'auto'} >
      {LangData?.map((obj, index) => (
        <TechIcon techName= {obj.language} key={index}/>
      ))}
    </Wrap>
    </>
  )
}

export default Languages