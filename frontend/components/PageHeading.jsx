import React from 'react'
import { Box, Heading, chakra } from '@chakra-ui/react'
import { contentPageHeadings } from '../utils/content'


const PageHeading = ({ page }) => {
  const headData = contentPageHeadings.find(checkPage);
  
  function checkPage(headline) {
    return headline.page == page; 
  }

  return (
    <Box textAlign={'center'} textTransform={'uppercase'} mb={4}>
      <Heading size={'2xl'} color={'gray.600'} opacity={'55%'}>
        {headData.bgTop}
      </Heading> 
      <Heading size={'xl'} >
        {headData.head}
        <chakra.span color={'#f79412'}>{headData.headSp}</chakra.span>
      </Heading>
      <Heading size={'2xl'} color={'gray.600'} opacity={'55%'}>
        {headData.bgBot}
      </Heading>
      
    </Box>
  )
}

export default PageHeading