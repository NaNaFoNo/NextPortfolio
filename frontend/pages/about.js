import {
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  Box,
  Divider,
} from '@chakra-ui/react'

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
          <Flex>
          

          </Flex>
        </GridItem> 
      </Grid>
      <Divider />
      <Box>Text</Box>
      
    </>
    
  )
}