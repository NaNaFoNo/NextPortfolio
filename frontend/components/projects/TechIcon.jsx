import React from 'react'
import { Icon, useColorModeValue } from '@chakra-ui/react'

import { svgTechIcons } from '../../utils/svgIcon'

const TechIcon = ({ techName }) => {
  const svgObject= svgTechIcons.find((tech) => tech.name.toLowerCase() == techName.toLowerCase());

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

export default TechIcon