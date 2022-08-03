import {
  Heading,
  Text,
  Icon,
  Grid,
  GridItem,
  Box,
  Badge,
  Divider,
  Stack,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import { FaAward, FaLaptopCode } from 'react-icons/fa'

import { ExternalLinkIcon } from '@chakra-ui/icons'

const stats = [
  {
    _id: 'stat1',
    number: '1.5+',
    description: 'Years of continuous Programming'
  },
  {
    _id: '2',
    number: '4+',
    description: 'Graduated Programming Courses'
  },
  {
    _id: '3',
    number: '30+',
    description: 'Hours of Coding / last Month'
  },
]

const timelineItems = [
  {
    _id: 'time1',
    name: 'Intro to Programming',
    start: '04/2021',
    end: '06/2021',
    source: 'Udacity',
    description: 'Certificate of Completion',
    link: 'https://graduation.udacity.com/confirm/DCPF7QMZ',
    rubric: 'education'
  },
  {
    _id: 'time2',
    name: 'Front End Web Developer',
    start: '06/2021',
    end: '08/21',
    source: 'Udacity',
    description: 'Certificate of Completion',
    link: 'https://graduation.udacity.com/confirm/QGNZJGAP',
    rubric: 'education'
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

const Card =({ children }) => {
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        boxShadow={'dark-lg'}
        rounded={'md'}
        p={4}
      >
        {children}
      </Box>
    </>
  )
}

const StatCard = ({ statData: { number, description }}) => {
  return (
    <>
      <Card>
        <Stack  direction={'column'} spacing={4} >
          <Heading>{number}</Heading>
          <Stack direction={'row'} spacing={2} fontSize={'sm'} pos={'relative'}>
            <Box
              _before={{ 
                content: '" "',
                position: 'absolute',
                left: '0',
                top: '15px',
                width: '2rem',
                height: '2px',
                backgroundColor: '#f79412'
              }}
              pl={'3rem'}
              pb={'0'}
              pos={'relative'}
              textTransform={'uppercase'}
              letterSpacing={'2px'}
              fontSize={'1.2rem'}
            >
              {description}
            </Box>
          </Stack>  
        </Stack>
      </Card>
    </>
  )
}

const TimelineCard =({ timeData: { name, start, end, source, description, link, rubric }}) => {
  return (
    <>
      <Card >
        <TimelineIcon rubric= {rubric} />
        <Badge
          p={'.2rem .6rem'}
          borderRadius={'15px'}
          fontSize={'.8rem'}
          textTransform={'uppercase'}
          ml={'2rem'}
          bg={useColorModeValue('gray.100', 'gray.700')}
          fontWeight={'500'}
        >
            { start + ' - ' + end }
        </Badge>
        <Heading
          p={'1rem 0'}
          ml={'2rem'}
          fontWeight={'600'}
          fontSize={'1.2rem'}
          textTransform={'uppercase'}
        >
          {name}
          <br />
          <Box as={'span'}  >
            - {source}
          </Box>
        </Heading>
        <Box as='p' ml={'2rem'}>
          {description + ' '}
          {{link} && 
            <Link href={{ link }} color={'#f79412'}>
              <Icon as={ExternalLinkIcon} boxSize={'1.1rem'}/> 
            </Link>
          }
        </Box>
      </Card>
    </>
  )
}

const TimelineIcon = ({rubric}) => {
  let icon 
  if (rubric == 'education') {
    icon = FaAward
  } else {
    icon = FaLaptopCode
  }

  return (
    <Box position={'relative'}>
          <Box 
            position={'absolute'}
            w={'50px'}
            h={'50px'}
            left= {'-38px'}
            top= {'0'}
            bg={'#f79412'}
            borderRadius={'50%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Icon as={ icon } boxSize={'1.3rem'}/>
          </Box>
        </Box>
  )
}

export default function about() {
  return (
    <>
      <Box p={{ base:'2rem 4rem' , md: '4rem 8rem'}}>
        <Heading textAlign={'center'} my={8}>ABOUT ME</Heading>
        <Grid
          gridTemplateColumns={['1fr', null,'repeat(2, 1fr)']} 
          width={'100%'}
          gap={12}
          justifyItems={'center'}
        >
          <GridItem>
            <Heading mb={4}>My Summary</Heading>
            <Text p={4}>
              As an expert on high-voltage vehicles, I'm currently working on the edge of 
              technology in automotive engineering.
              By continuously learning and discovering new stuff I had my first contact with Bitcoin. 
              The transformation of truth. This was the spark that was needed to give me 
              the conviction to adjust my roadmap. This new technology will transform the 
              world and I want to be part of this creative disruption.
            </Text>
            <Text p={4}>
              My passion for code should not just be a hobby. I began to dive deeper into some courses and started new habits. Building fundamental knowledge led me to graduate the Blockchain Developer Nanodegree at Udacity. But the journey has only just begun.
              Let's work to build a better tomorrow.
            </Text>
          </GridItem>
          <GridItem>
            <Grid
              gridTemplateColumns={{ base: '1fr', '2xl': 'repeat(2, 1fr)' }}
              gap={12}
              p={'2.5rem 0'}
            > 
              {stats.map((stat) => <StatCard statData={stat} key={stat._id}/>)}               
            </Grid>
          </GridItem> 
        </Grid>
      </Box>

      <Divider />

      <Box p={{ base:'2rem 4rem' , md: '4rem 8rem'}}>
        <Heading mb={'2rem'}>My code Timeline</Heading>
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={['2rem', null ,'3rem', '4rem']}
          p={'0 1rem'}
        >
          {timelineItems.map((item) => <TimelineCard timeData={item} key={item._id}/>)}
        </Grid>
      </Box>

      
      
    </>
    
  )
}