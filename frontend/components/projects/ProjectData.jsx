import React from 'react'
import {
  Wrap,
  Flex,
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

import { dateDiffOutput } from "../../utils/dateDiff";

import  icons  from '../icons/svgIcons';

const TopicIcon = ({ techName }) => {
  const iconData= icons.find((tech) => tech.name.toLowerCase() == techName.toLowerCase());
  return (
    <>
      {iconData && (
        <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
          <Icon 
            as={iconData.icon} 
            fill={ useColorModeValue(iconData.light, iconData.dark) } 
            boxSize="55" 
            viewBox="0 0 24 24" />
          <Badge mt={3} variant='subtle'>{techName}</Badge>
        </Flex>
      )
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
    const iconData= icons.find((tech) => tech.name.toLowerCase() == lang.toLowerCase());
    let obj = {}

    obj.language = lang
    obj.stat = Math.round(langValues[index] / langSum * 100)
    obj.color = iconData?.color
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
          <Wrap align={'center'} justify={'center'} spacing={'40px'} direction={'row'} mt={6} h={'auto'} >
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
            <Badge variant='outline' colorScheme='blue'>
              {dateDiffOutput(dateCreated)}
            </Badge>
              {' ago'}
          </Text>
          <Text textAlign={'center'}>
            {'Last Update  '}  
            <Badge variant='outline' colorScheme='green'>
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