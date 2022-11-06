import React from 'react'
import { Box, Heading, Text, chakra } from '@chakra-ui/react'
import { contentPageHeadings } from '../utils/content'


const PageHeading = ({ page }) => {
  const headData = contentPageHeadings.find(checkPage);
  
  function checkPage(headline) {
    return headline.page == page; 
  }

  return (
    <Box textAlign={'center'}  mb={4}>
      <Text fontSize={'4xl'} as={'kbd'} color={'gray.600'} opacity={'55%'}>
        {headData.bgTop}
      </Text> 
      <Heading size={'2xl'}  textTransform={'uppercase'} mt={'8px'}>
        {headData.head}
        <chakra.span color={'#f79412'}>{headData.headSp}</chakra.span>
      </Heading>
      <Text fontSize={'4xl'} as={'kbd'} color={'gray.600'} opacity={'55%'}>
        {headData.bgBot}
      </Text>
      
    </Box>
  )
}

export default PageHeading