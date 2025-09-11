import {
  Flex,
} from "@chakra-ui/react";
import DropDown from "./DropDown";

const Navbar = () => {
  
  return (
    <header>
      <Flex justify="space-between" align="center">
        <img src="/images/logo.svg" alt="Weather Now Logo" />

        <DropDown />
      </Flex>
    </header>
  );
};

export default Navbar;
