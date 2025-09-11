import React from "react";
import { Button, Flex, HStack, Input, InputGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Banner from "./Banner";
import WeatherCard from "./WeatherCard";

const WeatherFeature = () => {
  return (
    <Flex direction="column" gap="48px" alignItems="center">
      <Flex gap="18px">
        <InputGroup startElement={<FaSearch color="var(--neutral-0)" />}>
          <Input
            width="528px"
            rounded="12px"
            bg="var(--neutral-800)"
            border="none"
            outline="none"
            py="16px"
            px="24px"
            placeholder="Search for a place.."
          />
        </InputGroup>
        <Button
          rounded="12px"
          bg="var(--blue-500)"
          color="var(--neutral-0)"
          px="24px"
          py="16px"
        >
          Search
        </Button>
      </Flex>

      <Main />
    </Flex>
  );
};

export default WeatherFeature;

const Main = () => {
  return (
    <Flex gap="32px" justifyContent="center">
      <Flex direction="column" gap="48px" width="800px">
        <Banner />
        <HStack gap="24px">
          <WeatherCard title="feels like" value="20" unit="°C" />
          <WeatherCard title="Humidity" value="46" unit="%" />
          <WeatherCard title="Wind" value="14" unit="Km/hr" />
          <WeatherCard title="Precipitation" value="0" unit="mm" />
        </HStack>
      </Flex>
      <Flex
        direction="column"
        gap="16px"
        p="24px"
        rounded="20px"
        width="384px"
        bg="var(--neutral-800)"
      ></Flex>
    </Flex>
  );
};
