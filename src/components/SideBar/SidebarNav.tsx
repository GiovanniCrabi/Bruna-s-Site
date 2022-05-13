import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";


export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
    <NavLink href="/"> Produtos </NavLink>
    <NavLink href="/about"> Sobre  </NavLink>
    <NavLink href="/return"> Devolução ou Troca </NavLink>
  </Stack>
  )
}