import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";


export function Products() {
  return (
    <Box 
      maxW='90%'
      margin='0 auto'
    >
      <SimpleGrid 
        flex="1" 
        gap="5" 
        minChildWidth="320px" 
        alignItems='center' 
        mt='8'
      >
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
        <Box p={['6', '8']}  h='200px' bg='green.100'></Box>
    </SimpleGrid>  
    </Box>
    
  )
}