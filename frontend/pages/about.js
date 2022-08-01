import {
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  Box,
  Badge,
  Divider,
  Stack,
  useColorModeValue
  
} from '@chakra-ui/react'

import ExternalLinkIcon from '@chakra-ui/icons'

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
    link: 'https://graduation.udacity.com/confirm/DCPF7QMZ'
  },
  {
    _id: 'time1',
    name: 'Front End Web Developer',
    start: '06/2021',
    end: '08/21',
    source: 'Udacity',
    description: 'Certificate of Completion',
    link: 'https://graduation.udacity.com/confirm/QGNZJGAP'
  },
]

const Card =({ children }) => {
  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'md'}
        p={4}
        overflow={'hidden'}
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

const TimelineCard =({ timeData: { name, start, end, source, description, link }}) => {
  return (
    <>
      <Card>
        {/* Icon */}
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue('gray.50', 'gray.800')}
          fontWeight={'400'}
        >
            {start}-{end}
        </Badge>
        <Heading >
          {name}
          <br />
          <Box as={'span'}  >
            - {source}
          </Box>
        </Heading>
        <Box as='p'>
          {description}
         {/*  {link && 
            <Box as='a' href={{ link }}>
              <ExternalLinkIcon />
            </Box>
          } */}
        </Box>
        



      </Card>
    </>
  )
}

export default function about() {
  return (
    <>
      <Heading textAlign={'center'} mt={8}>ABOUT ME</Heading>
      <Grid
        gridTemplateColumns={['1fr', null,'repeat(2, 1fr)']} 
        width={'100%'}
        gap={8}
        p={'4rem'}
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
            gap={6}
            p={'2.5rem 0'}
          > 
            {stats.map((stat) => <StatCard statData={stat} key={stat._id}/>)}               
          </Grid>
        </GridItem> 
      </Grid>

      <Divider />
      <Box p={'0 1rem 5rem'}>
        <Heading>My code Timeline</Heading>
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