import React from 'react'
import {

  Wrap,
  Icon
 
} from '@chakra-ui/react';

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