import {
  Container,
  Card,
  Heading,
  Image,
  CardBody,
  Box,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";
import calculator from "../images/jsCalculator.png";

export default function Projects() {
  const bg = useColorModeValue("brand.50", "whiteAlpha.50");
  const h = useColorModeValue('brand.100', 'whiteAlpha.50');
  return (
    <Container
      width="-moz-max-content"
      centerContent
      bg={bg}
      borderRadius="3xl"
    >
      <Stack spacing="45px" marginBottom='50px'>
        <Heading>Projects</Heading>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg={h}
        >
          <Image
            src={calculator}
            borderRadius="20px"
            objectFit="cover"
            marginRight='10px'
            maxW={{ base: "100%", sm: "200px" }}
          ></Image>
          <Stack alignItems="center">
            <Heading size="md">Calculator WebApp</Heading>
            <Text>
              Basic calculator for the browser capable of multiplication,
              division, addition & subtraction. Created using HTML/CSS &
              Javascript
            </Text>
            <Box alignItems="center">
              <Button marginRight='.5rem'>
                <Link href="https://david-tech.github.io/calculator/">
                  Visit
                </Link>
              </Button>
              <Button>
                <Link href="https://github.com/David-Tech/calculator">
                  Source
                </Link>
              </Button>
            </Box>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
