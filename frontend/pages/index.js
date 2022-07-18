import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProjectsDataService from '../utils/projects'






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
      <Head>
        <title>NextPortfolio</title>
        <meta name="description" content="Next MERN-Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Next MERN-Portfolio
        </h1>

        <p className={styles.description}>
          This is a practise Project for working with Next and using a MongoDB Backend
          {/* Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          {projects.map((project) => {
            return (
              <div key={project._id}>
                <a href={project.github} className={styles.card}>
                  <h2>{project.name} &rarr;</h2>
                  <p>{project.description}</p>
                </a>
              </div>
              
            )
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
