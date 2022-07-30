import {
  Grid,
  GridItem,
  Box,
  Container,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';


export default function Home() {
  return (
    <Grid
      templateAreas={[`"b""a"`, null, `"a b"`]}
      gridTemplateColumns={['1fr', null,'repeat(2, 1fr)']} 
      width={'100%'}
      minHeight={'86vh'}
    >
      <GridItem colSpan={1} pos={'relative'} display='flex' area={'a'}>
        <Box h='100%' w='65%' pos={'absolute'} zIndex={'-1'} bg='gray.700' clipPath={'polygon(0 0, 46% 0, 79% 100%, 0% 100%)'}>
          
        </Box>
        <Container justifyContent='space-around' centerContent>
          <Image
            src={'/home.jpg'}
            objectFit={'cover'}
            w={'80%'}
            maxHeight={'80%'}
            borderRadius={'20px'}
          />
        </Container>
      </GridItem>
      <GridItem colSpan={1} display='flex' flexDirection={'column'} justifyContent={'center'} area={'b'} m={'4rem'} >
        
          <Heading mb={6}>
              Welcome,<br/>
              I'm <span style={ {color: '#f79412'} }>ANDREAS VIETEN.</span> 
              <br/>
              Graduated
              <br/>
              <span style={ {color: '#f79412'} }>BLOCKCHAIN- /<br/>WEB-DEVELOPER</span><br/>
              @Udacity
          </Heading>
          
          <Text maxWidth={'75%'}>
              Formerly Automotive Engineer turning Blockchain Developer. 
              Leaving my comfort zone and taking an asymmetric bet on the future. 
              If you want to know more about my journey into the rabbit hole, check out my site.
          </Text>
        
      </GridItem>

    </Grid>
  )
}
