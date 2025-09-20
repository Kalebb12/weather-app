import { Flex } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      maxWidth="1218px"
      marginX="auto"
      gap="64px"
      // p={{ base: "16px", md: "32px", lg: "48px 112px" }}
      px={{sm:"24px", base:"16px"}}
      py={{md:"48px",sm:"24px" ,base:"16px"}}
    >
      <Navbar />
      <HomePage />
    </Flex>
  );
};

export default App;
