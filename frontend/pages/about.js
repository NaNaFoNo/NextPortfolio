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

import { FaAward, FaLaptopCode, FaBookReader } from 'react-icons/fa'

import { ExternalLinkIcon } from '@chakra-ui/icons'

import PageHeading from '../components/PageHeading';
import { contentAbout } from '../utils/content'
import { colorSchemes } from '../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;


const Card =({ children }) => {

  return (
    <>
      <Box
        bg={useColorModeValue(lightMode.neutrals[2], darkMode.neutrals[1])}
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
  const colorAccent = useColorModeValue(lightMode.blue, darkMode.orange)

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
                backgroundColor: colorAccent
              }}
              pl={'3rem'}
              pb={'0'}
              pos={'relative'}
              textTransform={'uppercase'}
              letterSpacing={'2px'}
              fontSize={'xl'}
              as={'kbd'}
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
  const colorAccent = useColorModeValue(lightMode.blue, darkMode.orange)


  return (
    <>
      <Card >
        <TimelineIcon rubric= {rubric} />
        <Box position={'relative'}>
          <Box 
            position={'absolute'}
            right= {'45px'}
            top= {'0'}
          >
            <Badge
              p={'.2rem .6rem'}
              borderRadius={'15px'}
              fontSize={'xl'}
              textTransform={'uppercase'}
              bg={useColorModeValue(lightMode.neutrals[4], darkMode.neutrals[4])}
              fontWeight={'500'}
            >
              { start + ' - ' + end }
            </Badge>
          </Box>
        </Box>
        
        <Box m={'2rem 2rem 0'} fontSize={'xl'}>
          <Text fontSize={'2xl'} color={colorAccent} as={'kbd'}>
            {'{' }
            <br />    
          </Text>
          <Text color={colorAccent} as={'kbd'} ml={'1rem'}>
            {'title:'}    
          </Text>
          <Text
            ml={'2rem'}
            fontWeight={'600'}
            fontSize={'2xl'}
            textTransform={'uppercase'}
          >
            {name}
            <br />
            <Box as={'span'} fontWeight={'400'} >
              - {source}
            </Box>
          </Text>
          <Text  color={colorAccent} as={'kbd'} ml={'1rem'}>
            {'info:'}    
          </Text>
          <Box as='p' ml={'2rem'}>
            {description + ' '}
            {link && 
              <Link href={ link } color={colorAccent} isExternal>
                <Icon as={ExternalLinkIcon} boxSize={'1.1rem'}/> 
              </Link>
            }
          </Box>
          <Text fontSize={'2xl'} color={colorAccent} as={'kbd'}>
            {'}'}    
          </Text>
        </Box>
        
      </Card>
    </>
  )
}

const TimelineIcon = ({rubric}) => {
  const colorAccent = useColorModeValue(lightMode.blue, darkMode.orange)
  let icon 
  if (rubric == 'certificate') {
    icon = FaAward
  } else if (rubric == 'project') {
    icon = FaLaptopCode
  } else if (rubric == 'education') {
    icon = FaBookReader
  }

  return (
    <Box position={'relative'}>
      <Box 
        position={'absolute'}
        w={'50px'}
        h={'50px'}
        left= {'-38px'}
        top= {'0'}
        bg={colorAccent}
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

export default function About() {
  const stats = contentAbout.stats
  const bgColor = useColorModeValue(lightMode.neutrals[2], darkMode.neutrals[2])
  const timelineItems = contentAbout.timelineItems.sort((a, b) => {
    const date = new Date();
    a = a.end.split("/");
    b = b.end.split("/");
    if (a == b) {
      a = a.start.split("/")
      b = b.start.split("/")
    }

    if (a[0] === "present") {
      a = [date.getMonth(),date.getFullYear()]
    }
    if (b[0] === "present") {
      b = [date.getMonth(),date.getFullYear()]
    }
    return  new Date(b[1], b[0], 1) - new Date(a[1], a[0], 1)
  });

  return (
    <>
      <Box 
        p={{ base:'2rem 4rem' , md: '4rem 8rem'}} 
        bg={bgColor}>
        <PageHeading page={'about'}/>
        <Grid
          gridTemplateColumns={['1fr', null,'repeat(2, 1fr)']} 
          width={'100%'}
          gap={12}
          justifyItems={'center'}
          mt={'3rem'}
        >
          <GridItem>
            <Heading mb={4}>{contentAbout.subHeader}</Heading>
            { contentAbout.textParagraphs.map((paragraph, index) => (
              <Text p={4} key={index} fontSize={'xl'}>
                {paragraph}
              </Text>
            ))}
          </GridItem>
          <GridItem>
            <Grid
              gridTemplateColumns={{ base: '1fr', '2xl': 'repeat(2, 1fr)' }}
              gap={12}
              p={'2.5rem 0'}
            > 
              { stats.map((stat) => <StatCard statData={stat} key={stat._id}/>)}               
            </Grid>
          </GridItem> 
        </Grid>
      </Box>

      <Divider />

      <Box 
        p={{ base:'2rem 4rem' , md: '4rem 8rem'}}
        bg={bgColor}>
        <Heading mb={'2rem'}>My Timeline</Heading>
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={['2rem', null ,'3rem', '4rem']}
          p={'0 1rem'}
        >
          { timelineItems.map((item) => (
            <TimelineCard timeData={item} key={item._id}/>)
          )}
        </Grid>
      </Box>
    </>
  )
}