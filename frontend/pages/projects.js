import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import ProjectsDataService from '../utils/projects'
import {
  Wrap
} from '@chakra-ui/react';


import ProjectCard from '../components/ProjectCard'



export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    retrieveProjects();
  }, [])

  const retrieveProjects = () => {
    ProjectsDataService.getAll()
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to my Portfolio
      </h1>
      <p className={styles.description}>
        This is a practice Project for working with Next and using a MongoDB Backend
      </p>
      <Wrap spacing={'30px'} align={'center'} justify={'center'}>
        {projects.map((project) => <ProjectCard projectData={project} key={project._id}/>)}
      </Wrap>
    </div>
  )
}
