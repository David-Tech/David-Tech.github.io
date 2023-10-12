import {Container, Card, Heading, Image, CardBody, Text,Stack, useColorModeValue} from '@chakra-ui/react';
import calculator from '../images/jsCalculator.png'

export default function Projects() {
  const bg = useColorModeValue('brand.50', 'whiteAlpha.50')

  return (
    <Container width='-moz-max-content' centerContent bg={bg} borderRadius='3xl'>
      <Stack spacing='45px'>
      <Heading >Projects</Heading>
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
        <Image src={calculator} 
        borderRadius='20px' objectFit='cover' maxW={{base: '100%', sm: '200px'}}></Image>
          <CardBody>
            <Heading size='md'>Calculator WebApp</Heading>
            <Text>Summary of project and technologies used</Text>
          </CardBody>
        </Card>
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
        <Image src={calculator} 
        borderRadius='20px' objectFit='cover' maxW={{base: '100%', sm: '200px'}}></Image>
          <CardBody>
            <Heading size='md'>Calculator WebApp</Heading>
            <Text>Summary of project and technologies used</Text>
          </CardBody>
        </Card>
      </Stack>
    </Container>
  )
}