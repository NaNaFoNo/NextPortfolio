import React from "react";

import styles from '../styles/Home.module.css'

const ProjectCard = ({ projectData: { name, description, github }}) => {
    return (
        <div>
            <a href={github} className={styles.card}>
              <h2>{name} &rarr;</h2>
              <p>{description}</p>
            </a>
        </div>
    )
  }
  
  export default ProjectCard