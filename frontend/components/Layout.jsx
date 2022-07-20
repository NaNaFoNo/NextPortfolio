import React from "react";
import Head from "next/head";
import { Box } from '@chakra-ui/react';
import styles from '../styles/Home.module.css'

import Footer from "./Footer";
import Navbar from "./Navbar";



const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>NextPortfolio</title>
                <meta name="description" content="Next MERN-Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <Navbar />
                </header>
                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <Footer />
                </footer>
            </Box>
        </>
    )
  }
  
  export default Layout