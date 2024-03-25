
import { Center, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'

function NavbarWeb() {
  return (
   <>
   <Center>
   <Flex  maxW={'5xl'} justifyContent={"space-between"} width={"90%"} mx={"5%"}>
    <Image src='./sogelLogo.png' alt='Logo SOGEL'  height={"70px"}/>
    <Menu >
        <MenuButton    display={"flex"}  as={"a"} href='#services' _hover={{
            textDecor:"none"
        }} ><Flex mt={5}>Services <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/chevron-down.png" alt="chevron-down" /></Flex></MenuButton>
          <MenuList>
    <MenuItem as={"a"} href='#services' _hover={{
            textDecor:"none"
        }} >Formation</MenuItem>
    <MenuItem as={"a"} href='#web' _hover={{
            textDecor:"none"
        }} >Developpement Web</MenuItem>
    <MenuItem as={"a"} href='#mobile' _hover={{
            textDecor:"none"
        }} >Developpement Mobile</MenuItem>
  
  </MenuList>
    </Menu>
    <Link mt={5} href='#contact'>
    Contact</Link>
   </Flex>
   </Center>
   </>
  )
}

export default NavbarWeb