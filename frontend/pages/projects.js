import {
  Container,
  Wrap
} from '@chakra-ui/react';

import ProjectsDataService from '../utils/projects'

import ProjectCard from '../components/ProjectCard'
import PageHeading from '../components/PageHeading';


export default function Home({ projects }) {
  
  return (
    <Container maxW={'7xl'} p="12">
      <PageHeading page={'projects'} />
      <Wrap mt={'3rem'} spacing={'50px'} align={'center'} justify={'center'} overflow={'no'}>
        {projects?.map((project) => <ProjectCard projectData={project} key={project._id}/>)}
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