import React from 'react'
import {
  Wrap,
  Box,
  Text,
  Icon, 
  useColorModeValue,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Badge
} from '@chakra-ui/react';

import { svgTechIcons } from '../../utils/svgIcon'
import { dateDiffOutput } from "../../utils/dateDiff";

const TopicIcon = ({ techName }) => {
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
    obj.color = svgObject?.color
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
          {  obj.stat > 12 ? obj.stat +'%' : ''}
        </Box>
      ))
      }
    </Box>
    <Wrap align={'center'} justify={'space-around'} direction={'row'} mt={6} h={'auto'} >
      {LangData?.map((obj, index) => (
        <TopicIcon techName= {obj.language} key={index}/>
      ))}
    </Wrap>
    </>
  )
}


const ProjectData = ({ projectData: { topics, languages, created, updated }}) => {
  let dateCreated = new Date(created)
  let dateUpdated = new Date(updated)

  return (
    <Tabs mt={4} isFitted>
      <TabList>
        <Tab>Stack</Tab>
        <Tab>Languages</Tab>
        <Tab>Stats</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Wrap align={'center'} justify={'space-around'} direction={'row'} mt={6} h={'auto'} >
            {topics?.map((tech, index) => (
              <TopicIcon techName= {tech} key={index}/>
            ))}
          </Wrap>
        </TabPanel>
        <TabPanel>
          <Languages languages={languages}/>
        </TabPanel>
        <TabPanel>
          <Text textAlign={'center'}>
            {'Created  '}  
            <Badge variant='solid' colorScheme='blue'>
              {dateDiffOutput(dateCreated)}
            </Badge>
              {' ago'}
          </Text>
          <Text textAlign={'center'}>
            {'Last Update  '}  
            <Badge variant='solid' colorScheme='green'>
              {dateDiffOutput(dateUpdated)}
            </Badge>
            {' ago'}
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ProjectData