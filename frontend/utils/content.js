import { GiWolfHowl } from "react-icons/gi";

// Navbar content

export const contentNavbar = {
  title: 'NaNaFo Portfolio Blog',
  icon: GiWolfHowl,
  pages: ['Home', 'About', 'Projects', 'Blog', 'Contact'],
}  

// Page Headings

export const contentPageHeadings = [
  { page: 'about', head: 'about ', headSp: 'me', bgTop: 'my', bgBot: 'stats' },
  { page: 'projects', head: 'port', headSp: 'folio', bgTop: 'my', bgBot: 'projects' },
  { page: 'blog', head: 'blog ', headSp: 'posts', bgTop: 'my', bgBot: 'articles' },
  { page: 'contact', head: 'contact ', headSp: 'me', bgTop: 'get in', bgBot: 'touch' },
]

// Home Content

export const contentHome = {
  picture: "/home.jpg",
  heading: [
    { text: "Welcome to my ", highlight: false, br: false },
    { text: "Portfolio!", highlight: true, br: false },
  ],
  info: [
    { tag: "name:", transform: 'uppercase', value: "Andreas Vieten" },
    { tag: "area:", capitalize: 'uppercase', value: "Blockchain- / Web-Development" },
    { tag: "passion:", transform: 'uppercase', value: "Bitcoin" },
    { tag: "more:", transform: 'none', value: 'Automotive Engineer turning Blockchain Developer. \
      Leaving my comfort zone and taking an asymmetric bet on the future. \
      If you want to know more about my journey into the rabbit hole, check out my site.'
    },
  ],
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
    { _id: 'stat1', number: '5+', description: 'years experience in automotive engineerng' },
    { _id: 'stat2', number: '3', description: 'years experience in the energy sector' },
    { _id: 'stat3', number: '20', description: 'months focus on coding' },
    { _id: 'stat4', number: '18', description: 'months intense study of Bitcoin' },
  ],
  timelineItems: [
    {
      _id: 'time1',
      name: 'Clarity Camp Cohort #4',
      start: '08/2022',
      end: '10/2022',
      source: 'Stacks Foundation',
      description: 'Learning how to unleash the full power of smart contracts for Bitcoin through the Clarity smart contract language on Stacks.',
      link: 'https://clarity-lang.org/universe',
      rubric: 'certificate'
    },
    {
      _id: 'time2',
      name: 'Intro to Programming',
      start: '04/2021',
      end: '06/2021',
      source: 'Udacity',
      description: 'Certificate of Completion',
      link: 'https://graduation.udacity.com/confirm/DCPF7QMZ',
      rubric: 'certificate'
    },
    {
      _id: 'time3',
      name: 'Front End Web Developer',
      start: '06/2021',
      end: '08/2021',
      source: 'Udacity',
      description: 'Certificate of Completion',
      link: 'https://graduation.udacity.com/confirm/QGNZJGAP',
      rubric: 'certificate'
    },
    {
      _id: 'time5',
      name: 'Full Stack Web Developer',
      start: '09/2021',
      end: '11/2021',
      source: 'Udacity',
      description: 'Certificate of Completion',
      link: 'https://graduation.udacity.com/confirm/5HP7FCYE',
      rubric: 'certificate'
    },
    {
      _id: 'time6',
      name: 'Blockchain Developer',
      start: '12/2021',
      end: '02/2022',
      source: 'Udacity',
      description: 'Certificate of Completion',
      link: 'https://graduation.udacity.com/confirm/7KHLXESF',
      rubric: 'certificate'
    },
    {
      _id: 'time7',
      name: 'Bitcoin for Developers I',
      start: '04/2022',
      end: '05/2022',
      source: 'Saylor.org Academy - CS120',
      description: 'Certificate of Completion',
      link: 'https://certificates.saylor.org/e84a9dcf-7349-4db0-9bb4-bbfb986065a2',
      rubric: 'certificate'
    },
    {
      _id: 'time7',
      name: 'Bitcoin for Everybody',
      start: '11/2021',
      end: '11/2021',
      source: 'Saylor.org Academy - PRDV151',
      description: 'Certificate of Completion',
      link: 'https://certificates.saylor.org/7871c09c-1621-46a1-8c78-5b7922b8dbcb',
      rubric: 'certificate'
    },
    {
      _id: 'time4',
      name: 'PORTFOLIO BLOG WEBSITE',
      start: '06/2021',
      end: 'present',
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