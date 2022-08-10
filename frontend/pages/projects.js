import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import ProjectsDataService from '../utils/projects'
import {
  Wrap
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
    <div className={styles.container}>
      <PageHeading page={'projects'} />
      <p className={styles.description}>
        Take a look at some of my work
      </p>
      <Wrap spacing={'30px'} align={'center'} justify={'center'}>
        {projects.map((project) => <ProjectCard projectData={project} key={project._id}/>)}
      </Wrap>
    </div>
  )
}
