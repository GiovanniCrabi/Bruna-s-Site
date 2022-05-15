import { Box, Button, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";


export default function Home() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true

  })

  if(!isWideScreen) {
    return (
      <Box>
        <Header />
        <Sidebar />
         <Flex flexDirection='column' mt='4'>
           <Stack spacing='4'>
              <Text 
                  maxW='240px'
                  textAlign='center'
                  marginX='20'
                  fontSize='15px'
                  bg='green.100'
                > 
                    Brinquedos e acessórios ecológicos para aprender brincando
                  
                </Text>

                <Box>
                  <Image 
                  
                      src='/images/kidding.webp' 
                      alt="kidding"
                      width='940px'
                      height='500px'
                  /> 

                   
                </Box>
                <Box>
                  <Text 
                    textAlign='center'
                    width='300px'
                    bg='#8aa07c'
                    margin= '0 auto'
                    fontSize='20px'
                  > 
                      JUNTOS POR MAIS DIVERSÃO
                  </Text>
                </Box>

                <Button 
                  alignSelf='center'
                  marginLeft='10px'
                  colorScheme='green.900'
                  variant='outline'
                  size='lg'
                  borderRadius='0'
                  border='4px'
                  >
                    Compre já
                </Button>
           </Stack>
           
          </ Flex>
      </Box>
    )
  }

  return (
    <Box> 
      <Box>
        <Header />
        <Sidebar />
      </Box>
      
      <Flex mt='20'>

        <Image 
            src='/images/kidding.webp' 
            alt="kidding"
            width='940px'
            height='500px'
            /> 
        
     
        <Text 
          position='absolute' 
          maxW='240px'
          textAlign='center'
          marginX='20'
          mt='30'
          fontSize='20px'
          bg='green.100'
        > 
          
            Brinquedos e acessórios ecológicos para aprender brincando
          
        </Text>

        <Text 
          position='absolute'
          textAlign='center'
          width='300px'
          bg='#8aa07c'
          marginX='850'
          mt='50'
          fontSize='30px'
        > 
          JUNTOS POR MAIS DIVERSÃO
        </Text>
        
        <Button 
          alignSelf='center'
          marginLeft='10px'
          colorScheme='green.900'
          variant='outline'
          size='lg'
          borderRadius='0'
          border='4px'
          >
            Compre já
        </Button>

      </Flex>
    
    </Box>
  )
}
