import {
  Grid,
  GridItem,
  Box,
  Container,
  Image,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { contentHome } from '../utils/content'
import { colorSchemes } from '../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;

export default function Home() {
  const colorAccent = useColorModeValue(lightMode.blue, darkMode.orange)
  const neutrals = (l, d) => {
    return useColorModeValue(lightMode.neutrals[l], darkMode.neutrals[d])
  }

  return (
    <Grid
      bg={neutrals(2,2)}
      templateAreas={[`"b""a"`, null, `"a b"`]}
      gridTemplateColumns={['1fr', null,'repeat(2, 1fr)']} 
      width={'100%'}
      minHeight={'86vh'}
    >
      <GridItem colSpan={1} pos={'relative'} display='flex' area={'a'}>
        <Box 
          h='100%' 
          w='65%' 
          pos={'absolute'} 
          //zIndex={'-1'} 
          bg={neutrals(6,4)}
          clipPath={'polygon(0 0, 46% 0, 79% 100%, 0% 100%)'}
        />
        <Container justifyContent='space-around' centerContent>
          <Image
            zIndex={'1'} 
            src={contentHome.picture}
            objectFit={'cover'}
            w={'80%'}
            maxHeight={'80%'}
            borderRadius={'20px'}
          />
        </Container>
      </GridItem>

      <GridItem colSpan={1} display='flex' flexDirection={'column'} justifyContent={'center'} area={'b'} m={'4rem'} >
        <Heading mb={6}>
            {contentHome.heading.map((heading, index) => (
            <>
              { heading.highlight ? (
                <span style={ {color: colorAccent} } key={index}>{heading.text}</span> 
              ) : (
                <span key={index}>{heading.text}</span>
              )}
              { heading.br && (<br />)}
            </>
          ))}
        </Heading>

        <Box>
          <Text fontSize='2xl' color={colorAccent} as='kbd'>
            {'{' }
            <br />    
          </Text>
          {contentHome.info.map((info, index) => (
            <>
              <Text color={colorAccent} as='kbd' ml={'1rem'}>
                {info.tag} 
                <br />   
              </Text>
              <Text
                ml={'2rem'}
                fontWeight={info.transform === 'none' ? ('100'):('600')}
                fontSize={info.transform === 'none' ? ('1rem'):('1.4rem')}
                textTransform={info.transform}
              >
                {info.value}
              </Text>
              
            </>
          ))}

          <Text fontSize='2xl' color={colorAccent} as='kbd'>
            {'}'}
            <br />  
          </Text>
        </Box>
      </GridItem>

    </Grid>
  )
}
