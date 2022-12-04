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
    "As an automotive engineer, I am constantly striving to advance the state of the art in my field. \
    But my passion for technology extends far beyond the world of cars.",
    "I have also become deeply interested in the potential of Bitcoin to revolutionize our financial system and create a better future for all people.\
    Bitcoin is more than just money. It is a limited, digital commodity that cannot be easily reproduced, similar to gold. \
    It enables peer-to-peer payments without the need for a third party, similar to cash. And it can be sent in the digital space in seconds, similar to Visa or PayPal.",
    "Learning about Bitcoin and its potential is a lifelong journey, and I am dedicated to continuing to learn and discover new things. \
    Good, stable money can positively change the world. \
    It reduces unnecessary consumption and exploitation of our planet, \
    prevents the possibility of war financing through money creation out of thin air, and shrinks the gap between the rich and the poor through inflationary currencies.\
    That is why I am committed to driving adoption of Bitcoin and working towards a better future for all. Join me on this journey and let's build a better tomorrow together.",
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
    'Welcome to my blog! Here, I want to share with you my passion for Bitcoin and my journey into the fascinating world of this new monetary system. \
    Through my personal experiences and reflections, I hope to inspire and motivate others to explore this exciting technology and discover its limitless potential.',
    "As we explore the world of Bitcoin together, I will share my experiences with this technology and the latest developments. \
    I'm also interested in related topics such as web development, education, AI, and lifelong learning. \
    While I am not certain what specific content I will publish over time, I am excited to explore these topics and share my thoughts and experiences with you. \
    Join me on this exciting journey as we explore the world of Bitcoin and more to improve ourselves and reach our full potential.",
  ]
} 