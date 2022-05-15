import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";


export function SidebarNav() {
  return (
  <Stack spacing='12' align='flex-start'>
    <NavLink href="/Products"> Produtos </NavLink>
    <NavLink href="/About"> Sobre  </NavLink>
    <NavLink href="/Change"> Devolução ou Troca </NavLink>
  </Stack>
  )
}