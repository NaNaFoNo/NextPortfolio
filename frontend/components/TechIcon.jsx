import React from 'react'
import { Icon } from '@chakra-ui/react'

import { svgTechIcons } from '../utils/svgIcon'

const TechIcon = ({techName}) => {
  const svgObject= svgTechIcons.find((tech) => tech.name.toLowerCase() == techName.toLowerCase());

  return (    
    <>
      { svgObject && 
        <>
          <Icon boxSize="10" viewBox="0 0 24 24" fill={svgObject.color} p={0}>
            <path d= {svgObject.path}/>
            <title>{svgObject.name}</title>
          </Icon>
        </>
      }
    </>
  )
}

export default TechIcon