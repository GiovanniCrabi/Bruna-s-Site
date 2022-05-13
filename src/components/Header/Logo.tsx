import { Flex, Link, Text, Image, Spacer, useBreakpointValue } from "@chakra-ui/react";


export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex    
      w='100%'
      maxWidth={1480}
      justifyContent='center'
      alignItems='center'
    >
        <Flex justifyContent='center' >
          <Link>
            <Image 
              src="/images/logo.svg" 
              alt='Logo' 
              h={20}
              />
          </Link>
        </Flex>
        <Flex marginLeft='4'>
       
          {isWideVersion &&  
            <Text
              fontSize={["small" ,'2xl', '4xl']}
              fontWeight='bold'
              letterSpacing='tight'
              color='black.900'
            >
              APRENDER BRINCANDO
            </Text>}
        </Flex>
    </Flex>
  )
}