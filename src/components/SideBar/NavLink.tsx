import { Box, Stack, Text } from "@chakra-ui/react";

interface NavLinkProps {
  title: string;
}

export function NavLink({ title }: NavLinkProps) {
  return (
    <Box>
      <Stack spacing='4' mt='8' color='green.900'>
         <Text> {title} </Text> 
      </Stack>
    </Box>
  )
}