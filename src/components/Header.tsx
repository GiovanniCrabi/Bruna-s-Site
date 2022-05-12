import { Box, Flex, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";


export function Header() {
  return (
  <>
    <Flex
    w='100%'
    maxWidth={1480}
    justifyContent='center'
    alignItems='center'
    textAlign='center'
    h='10'
    bg='#8aa07c' 
    >
      <Text 
        fontSize={[15,20]}>
         ENVIO GRÁTIS PARA PEDIDOS ACIMA DE R$300
      </Text>
    </Flex>
    
   <Flex as='header'>
        <Flex 
          w='100%'
          maxWidth={1480}
          h='20vh'
          mx='auto'
          px='6'
          align='center'
          bg='green.100'
        >
          <Logo />
        </Flex>
    </Flex>
  </>
  )
}