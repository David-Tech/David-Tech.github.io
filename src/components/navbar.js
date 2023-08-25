import { Flex, HStack, Button, useColorMode, Heading, Icon, Text} from "@chakra-ui/react";
import {Link as ReactRouterLink} from 'react-router-dom'
import {Link as ChakraLink} from '@chakra-ui/react'
import { MoonIcon, SunIcon} from "@chakra-ui/icons";
import { IconLeaf, IconBrandGithub} from "@tabler/icons-react";

export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Flex as="nav" p="10px" justify='space-around'>
            <ChakraLink as={ReactRouterLink} to='/'>
                <HStack spacing='10px'>
                <Icon as={IconLeaf} boxSize={8}/>
                <Heading size='md'>David Briken</Heading>
                </HStack>
            </ChakraLink>
            
            <HStack spacing="20px" >
                <Button bg='' onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon bg=''/> : <SunIcon/> }</Button>
                <ChakraLink as={ReactRouterLink} to='/Projects'>Projects</ChakraLink>
                <ChakraLink  display='inline-flex' href='https://github.com/David-Tech/David-Tech.github.io'>
                    <IconBrandGithub/>
                    <Text>Source</Text>
                </ChakraLink>
            </HStack>
        </Flex>

        
    )
}
