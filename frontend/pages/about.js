import {
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  Box,
  Center,
  Divider,
  Stack,
  useColorModeValue
  
} from '@chakra-ui/react'

const stats = [
  {
    _id: '1',
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

const StatCard = ({ statData: { number, description }}) => {
  return (
    <>
      <Box
        
        
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'md'}
        p={4}
        overflow={'hidden'}
      >
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
      </Box>
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
        minHeight={'75vh'}
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
      <Box>Text</Box>
      
    </>
    
  )
}