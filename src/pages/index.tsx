import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Products } from "../components/Products";
import { Sidebar } from "../components/SideBar";
import About from "./about";

export default function Home() {
  return (
    <Box> 
        <Flex flexDirection='column'>
          <Header />

          <Sidebar />
        </Flex>


      <Products />
      <About />
    </Box>
    
  )
}
