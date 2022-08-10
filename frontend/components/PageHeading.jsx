import React from 'react'
import { Box, Heading, chakra } from '@chakra-ui/react'


const headlines = [
  { page: 'about', head: 'about ', headSp: 'me', bgTop: 'my', bgBot: 'stats' },
  { page: 'projects', head: 'port', headSp: 'folio', bgTop: 'my', bgBot: 'projects' },
  { page: 'blog', head: 'blog ', headSp: 'posts', bgTop: 'my', bgBot: 'articles' },
  { page: 'contact', head: 'contact ', headSp: 'me', bgTop: 'get in', bgBot: 'touch' },
]



const PageHeading = ({ page }) => {
  const headData = headlines.find(checkPage);
  
  function checkPage(headline) {
    return headline.page == page; 
  }

  return (
    <Box textAlign={'center'} textTransform={'uppercase'}>
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