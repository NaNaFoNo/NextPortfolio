import React from 'react'
import { Flex, Select, Box, Badge} from '@chakra-ui/react';

import { filterData } from '../utils/filterData';

const SearchFilters = ({getFilters}) => {
  
  return (
    <Flex  p="4" justifyContent="center" flexWrap="wrap">
      {filterData?.map((filter) => (
        <Box display={'flex'} flexDir={'column'} alignItems={'center'} key={filter.queryName}>
          <Badge variant='subtle'>{filter.queryName}</Badge>
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