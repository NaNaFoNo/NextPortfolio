import { useState, useEffect } from 'react'
import ProjectsDataService from '../utils/projects'
import {
  Container,
  Wrap,
  Text
} from '@chakra-ui/react';


import ProjectCard from '../components/ProjectCard'
import PageHeading from '../components/PageHeading';


export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    retrieveProjects();
  }, [])

  const retrieveProjects = () => {
    ProjectsDataService.getAllProjects()
      .then(response => {
        setProjects(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  

  return (
    <Container maxW={'7xl'} p="12">
      <PageHeading page={'projects'} />
      <Wrap mt={'3rem'} spacing={'50px'} align={'center'} justify={'center'} overflow={'no'}>
        {projects.map((project) => <ProjectCard projectData={project} key={project._id}/>)}
      </Wrap>
    </Container>
  )
}
