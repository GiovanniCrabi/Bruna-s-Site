import { Flex, Link, Text, Image, Spacer } from "@chakra-ui/react";


export function Logo() {
  return (
    <Flex    
      w='100%'
      maxWidth={1480}
      justifyContent='center'
      alignItems='center'
        >
        <Flex>
          <Link>
            <Image 
              src="/images/logo.svg" 
              alt='Logo' 
              h={20}
              marginLeft='10px'
              />
          </Link>
        </Flex>
        <Flex marginLeft='100px'>
        <Text
            fontSize={["small" ,'2xl', '4xl']}
            fontWeight='bold'
            letterSpacing='tight'
            color='black.900'
          >
            APRENDER BRINCANDO
        </Text>
        </Flex>
    </Flex>
  )
}