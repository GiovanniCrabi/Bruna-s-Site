import { Box, Stack, Text, Link } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps {
  children: string;
  href: string
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
  return (
      <ActiveLink href={href}>
        <Link display='flex' alignItems='center' {...rest}>
          <Text> {children} </Text> 
        </Link>
      </ActiveLink>
  )
}