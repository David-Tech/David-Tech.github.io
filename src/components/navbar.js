import { Flex, Box,Spacer, HStack, Avatar, Button, useColorMode} from "@chakra-ui/react";
import {Link as ReactRouterLink} from 'react-router-dom'
import {Link as ChakraLink} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Flex as="nav" p="10px">
            <HStack spacing='10px'>
            <Avatar  size='md'   bg='gray.600'/>
             <Button bg='' onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon bg=''/> : <SunIcon bg=''/> }</Button>
            </HStack>
        <Spacer/>

        <HStack spacing="30px" pr='50px'>
            <ChakraLink as={ReactRouterLink} to='/'> Home </ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/Projects'>Projects</ChakraLink>
            <ChakraLink as={ReactRouterLink} to='/About'>About</ChakraLink>
        </HStack>

        </Flex>
    )
}
