import { Flex, Link, Text, Image, Spacer, useBreakpointValue } from "@chakra-ui/react";


export function Logo() {
  return (
    <Flex    
      w='100%'
      maxWidth={1480}
      justifyContent='center'
      alignItems='center'
      marginRight='42'
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
    </Flex>
  )
}