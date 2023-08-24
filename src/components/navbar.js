import { Flex, Box, Heading, Button, Text, Spacer } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Flex as="nav" p="10px" allignItems="center" gap="10px">
            <Box bg="gray.300">D</Box>
            <Button>DM</Button>
        <Spacer/>

            <Text>Home</Text>
            <Text>About</Text>
            <Text>Projects</Text>


        </Flex>
    )
}
