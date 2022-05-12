import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/SideBar";

export default function Home() {
  return (
    <Flex flexDirection='column' h='100vh'>
      <Header />
      <Sidebar />
      <Flex>
     
      </Flex>
    </Flex>
  )
}
