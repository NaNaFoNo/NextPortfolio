import React from 'react'
import { Flex, Select, Box, Badge, useColorModeValue} from '@chakra-ui/react';

import { filterData } from '../utils/filterData';
import { colorSchemes } from '../utils/colors'

const lightMode = colorSchemes.lightMode;
const darkMode = colorSchemes.darkMode;

const SearchFilters = ({getFilters}) => {
  const neutrals = (l, d) => {
    return useColorModeValue(lightMode.neutrals[l], darkMode.neutrals[d])
  }
  
  return (
    <Flex  p="4" justifyContent="center" flexWrap="wrap">
      {filterData?.map((filter) => (
        <Box display={'flex'} flexDir={'column'} alignItems={'center'} key={filter.queryName}>
          <Badge variant='subtle' bg={neutrals(4,4)} px={'4px'}>{filter.queryName}</Badge>
          <Select
            placeholder={filter.placeholder} 
            w="fit-content"
            p="2"
            onChange={(e) => getFilters({ [filter.queryName]: e.target.value })}
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters