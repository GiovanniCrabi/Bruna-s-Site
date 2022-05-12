import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex flexDirection='column' h='100vh'>
      <Header />

      <Flex>
        Restante do conteudo
      </Flex>
    </Flex>
  )
}
