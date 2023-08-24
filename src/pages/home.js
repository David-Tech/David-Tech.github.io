import {Container, Box, Heading, Text, SimpleGrid, Image, Center } from "@chakra-ui/react"
import React from 'react'
import dbImage from '../images/dbimg.jpg'
export default function Home() {
    return(
        
        <Container  centerContent>
            <SimpleGrid columns={2}>
            <Box>
                <Heading textAlign='center'>David Briken</Heading>
                <Text textAlign='left'> lorem-ipsum.paragraph </Text>
            </Box>
            <Box>
                <Image borderRadius='md' src={dbImage} alt="img"/>
            </Box>
            </SimpleGrid>
        </Container>
        
    )
}