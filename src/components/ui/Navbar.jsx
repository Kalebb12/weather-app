import {
  Flex,
  Heading,
} from "@chakra-ui/react";
import DropDown from "./DropDown";

const Navbar = () => {
  
  return (
    <header>
      <Flex justify="space-between" align="center">
        <Flex gap="7px" alignItems="center">
        <img src="/images/logo.svg" alt="Weather Now Logo" />
        <Heading fontFamily="var(--font-heading)" fontSize={{md:"22px",base:"15px"}} fontWeight="700">Weather Now</Heading>
        </Flex>

        <DropDown />
      </Flex>
    </header>
  );
};

export default Navbar;
