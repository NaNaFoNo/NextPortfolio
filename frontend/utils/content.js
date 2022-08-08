import { GiWolfHowl } from "react-icons/gi";

// Navbar content

export const contentNavbar = {
  title: 'NaNaFo Portfolio Blog',
  icon: GiWolfHowl,
  pages: ['Home', 'About', 'Projects', 'Blog', 'Contact'],
}  

// Home Content

export const contentHome = {
  picture: "/home.jpg",
  heading: [
    { text: "Welcome,", highlight: false, br: true },
    { text: "I'm ", highlight: false, br: false },
    { text: "ANDREAS VIETEN.", highlight: true, br: true },
    { text: "Graduated", highlight: false, br: true },
    { text: "BLOCKCHAIN- /", highlight: true, br: true },
    { text: "WEB-DEVELOPER", highlight: true, br: true },
    { text: "@Udacity", highlight: false, br: false },
  ],
  text: 'Formerly Automotive Engineer turning Blockchain Developer. \
        Leaving my comfort zone and taking an asymmetric bet on the future. \
        If you want to know more about my journey into the rabbit hole, check out my site.'
}

// About Content

export const contentAbout = {
  subHeader: 'My Summary',
  textParagraphs: [
    "As an expert on high-voltage vehicles, I'm currently working on the edge of \
    technology in automotive engineering. By continuously learning and discovering \
    new stuff I had my first contact with Bitcoin. The transformation of truth. \
    This was the spark that was needed to give me the conviction to adjust my roadmap. \
    This new technology will transform the world and I want to be part of this creative \
    disruption.",
    "My passion for code should not just be a hobby. I began to dive deeper into some \
    courses and started new habits. Building fundamental knowledge led me to graduate \
    the Blockchain Developer Nanodegree at Udacity. But the journey has only just begun. \
    Let's work to build a better tomorrow.",
  ],
  stats: [
    { _id: 'stat1', number: '1.5+', description: 'Years of continuous Programming' },
    { _id: 'stat2', number: '4+', description: 'Graduated Programming Courses' },
    { _id: 'stat3', number: '30+', description: 'Hours of Coding / last Month' },
  ],
  timelineItems: [
    {
      _id: 'time1',
      name: 'Intro to Programming',
      start: '04/2021',
      end: '06/2021',
      source: 'Udacity',
      description: 'Certificate of Completion',
      link: 'https://graduation.udacity.com/confirm/DCPF7QMZ',
      rubric: 'certificate'
    },
    {
      _id: 'time2',
      name: 'Front End Web Developer',
      start: '06/2021',
      end: '08/21',
      source: 'Udacity',
      description: 'Certificate of Completion',
      link: 'https://graduation.udacity.com/confirm/QGNZJGAP',
      rubric: 'certificate'
    },
    {
      _id: 'time3',
      name: 'PORTFOLIO BLOG WEBSITE',
      start: '06/2021',
      end: '08/21',
      source: 'PROJECT',
      description: "You are looking at this page right now. I'm still working on it \
                    in the background for further improvements and functionality.",
      link: 'https://github.com/NaNaFoNo/PortfolioBlogWebsite',
      rubric: 'project'
    },
  ]
}

// Blog Content

export const contentBlog = {
  title: 'NaNaFo-Blog',
  blogs: [
    {
      _id: 'Blog0',
      caption: "Why I'm starting a blog?",
      description: 'Writing is re-thinking. Learning accelerates and your ideas got clear.',
      url: 'https://dev.to/nanafo/why-im-starting-a-blog-2mg7',
      image: 'https://images.unsplash.com/photo-1472162314594-eca3c3d90df1?ixlib=rb-1.2.1&\
              ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&\
              w=2069&q=80',
    },
    {
      _id: 'Blog1',
      caption: 'blog article title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: '#',
      image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1\
              &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop\
              &w=2070&q=80',
    },
    {
      _id: 'Blog2',
      caption: 'blog article title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: '#',
      image: 'https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1\
              &ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&\
              w=1470&q=80',
    },
  ],
  showcase: 0,
  blogDescription: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Sed finibus ex ac vehicula fermentum. Duis tempor dui laoreet \
    elementum varius. Proin fermentum quam in elit sollicitudin, \
    in ultrices neque dapibus. Pellentesque habitant morbi tristique \
    senectus et netus et malesuada fames ac turpis egestas. Phasellus \
    fringilla nunc vel urna suscipit, nec laoreet enim volutpat. Integer \
    feugiat sapien dui, a accumsan nulla.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Sed finibus ex ac vehicula fermentum. Duis tempor dui laoreet \
    elementum varius. Proin fermentum quam in elit sollicitudin, \
    in ultrices neque dapibus. Pellentesque habitant morbi tristique \
    senectus et netus et malesuada fames ac turpis egestas. Phasellus \
    fringilla nunc vel urna suscipit, nec laoreet enim volutpat. Integer \
    feugiat sapien dui, a accumsan nulla.',
  ]
} 