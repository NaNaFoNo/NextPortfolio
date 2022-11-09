import React from 'react'
import { Box, Heading, Text, chakra, useColorModeValue } from '@chakra-ui/react'
import { contentPageHeadings } from '../utils/content'
import { colorSchemes } from '../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;



const PageHeading = ({ page }) => {
  const headData = contentPageHeadings.find(checkPage);
  const accent = useColorModeValue(lightMode.blue, darkMode.orange);
  const neutrals = useColorModeValue(lightMode.neutrals[6], darkMode.neutrals[5]);

  function checkPage(headline) {
    return headline.page == page; 
  }

  return (
    <Box textAlign={'center'}  mb={4}>
      <Text fontSize={'4xl'} as={'kbd'} color={neutrals} opacity={'55%'}>
        {headData.bgTop}
      </Text> 
      <Heading size={'2xl'}  textTransform={'uppercase'} mt={'8px'}>
        {headData.head}
        <chakra.span color={accent}>{headData.headSp}</chakra.span>
      </Heading>
      <Text fontSize={'4xl'} as={'kbd'} color={neutrals} opacity={'55%'}>
        {headData.bgBot}
      </Text>
      
    </Box>
  )
}

export default PageHeading