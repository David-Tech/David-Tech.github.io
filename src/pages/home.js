import {Container, Box, Heading, Text, SimpleGrid, Image, Center, HStack, VStack } from "@chakra-ui/react"
import React from 'react'
import dbImage from '../images/headshot.jpg'
export default function Home() {
    return(
        
        <Container width='-moz-max-content' centerContent>
           <VStack spacing='30px'>
                <Box>
                    <HStack spacing='50px' alignItems='center'>
                        <Heading textAlign='center' fontSize='4xl'>David Briken</Heading>
                        <Image borderRadius='full' maxHeight='100px' maxWidth='100px' src={dbImage} alt="img"/>
                    </HStack>
                </Box>
                
                
                <Box>
                    <Heading as='h4' fontSize='2xl' textAlign='left'>About</Heading>
                    <Text textAlign='justify' style={{textIndent: 20}}>{'\tDo commodo eiusmod amet amet proident qui consequat veniam occaecat excepteur enim dolor eu. Dolore eu aliquip occaecat ut sit fugiat. Reprehenderit anim consectetur excepteur duis veniam. Ipsum proident ullamco enim aute in amet pariatur officia consectetur. Aliqua nulla elit deserunt esse. Eiusmod culpa sunt cillum est velit ex magna veniam.'}</Text>
                </Box>
                <Box>
                    <Heading as='h4' fontSize='2xl' textAlign='left'>Bio</Heading>
                    <Text textAlign='justify' style={{textIndent: 20}}>{'\tDo commodo eiusmod amet amet proident qui consequat veniam occaecat excepteur enim dolor eu. Dolore eu aliquip occaecat ut sit fugiat. Reprehenderit anim consectetur excepteur duis veniam. Ipsum proident ullamco enim aute in amet pariatur officia consectetur. Aliqua nulla elit deserunt esse. Eiusmod culpa sunt cillum est velit ex magna veniam.'}</Text>
                </Box>
                <Box>
                    <Heading as='h4' fontSize='2xl' textAlign='left'>Contact</Heading>
                    <Text textAlign='justify' style={{textIndent: 20}}>{'\tDo commodo eiusmod amet amet proident qui consequat veniam occaecat excepteur enim dolor eu. Dolore eu aliquip occaecat ut sit fugiat. Reprehenderit anim consectetur excepteur duis veniam. Ipsum proident ullamco enim aute in amet pariatur officia consectetur. Aliqua nulla elit deserunt esse. Eiusmod culpa sunt cillum est velit ex magna veniam.'}</Text>
                </Box>
            </VStack>
        </Container>
        
    )
}