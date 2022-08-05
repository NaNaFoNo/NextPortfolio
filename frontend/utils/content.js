// Pages Navbar

export const pages = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

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
      description: "You are looking at this page right now. I'm still working on it in the background for further improvements and functionality. ",
      link: 'https://github.com/NaNaFoNo/PortfolioBlogWebsite',
      rubric: 'project'
    },
  ]
}
