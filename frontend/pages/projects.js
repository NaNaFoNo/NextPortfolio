import { useState, useEffect } from 'react';

import {
  Container,
  Wrap
} from '@chakra-ui/react';

import ProjectsDataService from '../utils/projects'

import ProjectCard from '../components/projects/ProjectCard'
import PageHeading from '../components/PageHeading';
import SearchFilters from '../components/SearchFilters';


export default function Home({ projects }) {
  const [projectStore, setProjectStore] = useState(projects)
  const [searchFilter, setSearchFilter] = useState({})

  const childToParent = (childData) => {
    setSearchFilter(childData)
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
    <Container maxW={'7xl'} p="12">
      <PageHeading page={'projects'} />
      <SearchFilters childToParent={childToParent}/>
      <Wrap mt={'3rem'} spacing={'50px'} align={'center'} justify={'center'} overflow={'no'}>
        {projectStore?.map((project) => <ProjectCard projectData={project} key={project._id}/>)}
      </Wrap>
    </Container>
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