import { Box, Heading, Text } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a666" color="gray.500" px={6} py={8}>
      {/* Styled heading to display the project name */}
      <Heading
        as="h1"
        textAlign="center"
        color="white"
        mb={2}
        fontSize="4xl"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="widest"
      >
        DevPad
      </Heading>

      {/* Styled tagline beneath the heading */}
      <Text
        fontSize="lg"
        textAlign="center"
        color="gray.300"
        mb={8}
        fontStyle="italic"
        letterSpacing="wider"
      >
        Your Ultimate Code Playground
      </Text>

      <CodeEditor />
    </Box>
  );
}

export default App;
