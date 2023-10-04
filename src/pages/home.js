import {Container, Heading, Text, SimpleGrid, Button, Image, Center, HStack, VStack, List, ListItem, ListIcon, Link as ChakraLink, UnorderedList} from "@chakra-ui/react"
import React from 'react'
import { IconBrandLinkedin, IconBrandTwitter, IconInbox} from "@tabler/icons-react";
import dbImage from '../images/headshot.jpg'
import { Link } from "react-router-dom";
export default function Home() {
    return(
        
        <Container width='-moz-max-content' centerContent>
           <VStack spacing='30px'>
                <Container  width='-moz-max-content' paddingTop='50px'>
                    <HStack spacing='50px' alignItems='center'>
                        <Heading textAlign='center' fontSize='4xl'>David Briken</Heading>
                        <Image borderRadius='full' maxHeight='150px' maxWidth='150px' src={dbImage} alt="img"/>
                    </HStack>
                </Container>
                <Container>
                    <Heading as='h4' fontSize='2xl' textAlign='left' paddingBottom='10px'>About</Heading>
                    <Text textAlign='justify' style={{textIndent: 20}}>{'\tDavid is an aspiring software developer passionate about creating products that help people! He has recently graduated with a bachelors degree in Information Systems from the University of Maryland, Baltimore County. Currently, he is focused on gaining experience developing full stack applications.'}</Text>
                </Container>
                <Container>
                    <Heading as='h4' fontSize='2xl' textAlign='left' paddingBottom='10px'>Interests</Heading>
                    <UnorderedList>
                        <ListItem>Web Development</ListItem>
                        <ListItem>Artificial Intelligence</ListItem>
                        <ListItem>Mobile Development</ListItem>
                    </UnorderedList>
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
                <Container>
                    <Button as={ChakraLink} href="../document/resITDB.pdf" download="dbresume">Resume</Button>
                </Container>
            </VStack>
        </Container>
        
    )
}