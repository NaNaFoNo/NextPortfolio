import { useState, useEffect } from 'react';

import {
  Box,
  Wrap, 
  Flex,
  Text,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';

import { BsFilter } from 'react-icons/bs';

import ProjectsDataService from '../utils/projects'

import ProjectCard from '../components/projects/ProjectCard'
import PageHeading from '../components/PageHeading';
import SearchFilters from '../components/SearchFilters';

import { colorSchemes } from '../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;


export default function Home({ projects }) {
  const [searchFilters, setSearchFilters] = useState(false);
  const [projectStore, setProjectStore] = useState(projects)
  const [searchFilter, setSearchFilter] = useState({})

  const colorAccent = useColorModeValue(lightMode.blue, darkMode.orange)
  const neutrals = (l, d) => {
    return useColorModeValue(lightMode.neutrals[l], darkMode.neutrals[d])
  }

  const getFilters = (newFilter) => {

    setSearchFilter({ ...searchFilter, ...newFilter})
  }

  useEffect(() => {
    let filteredProjects = projects
    {searchFilter.category && (
      filteredProjects = filteredProjects.filter(project => project.category === searchFilter.category)
    )}
    {searchFilter.topic && (
      filteredProjects = filteredProjects.filter(project => {
        return project.topics.includes(searchFilter.topic);
      })
    )}
    {searchFilter.language && (
      filteredProjects = filteredProjects.filter(project => {
        console.log('projekt:', )
        return Object.keys(project.languages).includes(searchFilter.language);
      })
    )}
    setProjectStore(filteredProjects)
  }, [searchFilter])
  
  
  return (
    <Box px={{ base:'8rem' , xl:'12rem'}} p="12" bg={neutrals(2,2)}>
      <PageHeading page={'projects'}/>
      <Flex
          cursor="pointer"
          borderBottom="1px"
          borderColor="gray.300"
          p="2"
          fontWeight="bold"
          fontSize="lg"
          justifyContent="flex-end"
          alignItems="center"
          onClick={() => {
            setSearchFilters((prevFilters) => !prevFilters );
            if (searchFilters) setSearchFilter({});
          }}
      >
          <Text>Filter Projects</Text>
          <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>
      { searchFilters && <SearchFilters getFilters={getFilters}/>}
      <Wrap mt={'3rem'} spacing={'50px'} align={'center'} justify={'center'} overflow={'no'}>
        {projectStore?.map((project) => <ProjectCard projectData={project} key={project._id}/>)}
      </Wrap>
    </Box>
  )
}


export async function getStaticProps() {
  const req = await ProjectsDataService.getAllProjects();

  return {
    props: {
      projects: req.data,
    }
  }
}