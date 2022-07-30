import React from "react";
import Head from "next/head";
import { Box } from '@chakra-ui/react';

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
      <Box m="auto">
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  )
}

export default Layout