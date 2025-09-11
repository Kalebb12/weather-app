import { Flex } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      maxWidth="1440px"
      gap="64px"
      mx="auto"
      p={{ base: "16px", md: "32px", lg: "48px 112px" }}
    >
      <Navbar />
    </Flex>
  );
};

export default App;
