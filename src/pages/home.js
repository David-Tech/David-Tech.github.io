import {Container, Heading, Text, SimpleGrid, Image, Center, HStack, VStack, List, ListItem, ListIcon, Link as ChakraLink} from "@chakra-ui/react"
import React from 'react'
import { IconBrandLinkedin, IconBrandTwitter, IconInbox} from "@tabler/icons-react";
import dbImage from '../images/headshot.jpg'
import { Link } from "react-router-dom";
export default function Home() {
    return(
        
        <Container width='-moz-max-content' centerContent>
           <VStack spacing='30px'>
                <Container  width='-moz-max-content'>
                    <HStack spacing='50px' alignItems='center'>
                        <Heading textAlign='center' fontSize='4xl'>David Briken</Heading>
                        <Image borderRadius='full' maxHeight='100px' maxWidth='100px' src={dbImage} alt="img"/>
                    </HStack>
                </Container>
                <Container>
                    <Heading as='h4' fontSize='2xl' textAlign='left'>About</Heading>
                    <Text textAlign='justify' style={{textIndent: 20}}>{'\tDavid is an aspiring software developer passionate about creating products that help people! He has recently graduated with a bachelors degree in Information Systems from the University of Maryland, Baltimore County'}</Text>
                </Container>
                <Container>
                    <Heading as='h4' fontSize='2xl' textAlign='left'>Bio</Heading>
                    <Text textAlign='justify' style={{textIndent: 20}}>{''}</Text>
                </Container>
                <Container>
                    <Heading as='h4' fontSize='2xl' textAlign='left'>Contact</Heading>
                    <List spacing={3}>
                            <ListItem as={ChakraLink} boxSize='md' href='https://www.linkedin.com/in/dbriken/'>
                                    <ListIcon as={IconBrandLinkedin}/>@dbriken
                            </ListItem>
                        </List>
                        <List spacing={3}>
                            <ListItem as={ChakraLink} boxSize='md' href='https://twitter.com/DBriken'>
                                    <ListIcon as={IconBrandTwitter}/>@dbriken
                            </ListItem>
                        </List>
                        <List spacing={15}>  
                            <ListItem as={ChakraLink} boxSize='md' href='mailto:dbriken.tech@gmail.com'>
                                <ListIcon as={IconInbox}/>dbriken.tech@gmail.com
                            </ListItem>
                        </List>
                </Container>
            </VStack>
        </Container>
        
    )
}