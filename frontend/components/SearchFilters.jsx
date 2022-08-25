import React from 'react'
import { Flex, Select, Box, Text} from '@chakra-ui/react';

import { filterData } from '../utils/filterData';

const SearchFilters = ({childToParent}) => {
  
  return (
    <Flex  p="4" justifyContent="center" flexWrap="wrap">
      {filterData?.map((filter) => (
        <Box key={filter.queryName}>
          <Text>{filter.queryName + ' :'}</Text>
          <Select
            placeholder={filter.placeholder} 
            w="fit-content"
            p="2"
            onChange={(e) => childToParent({ [filter.queryName]: e.target.value })}
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