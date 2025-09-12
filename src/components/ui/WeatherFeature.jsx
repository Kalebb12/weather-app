import React from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  Menu,
  Portal,
  Text,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Banner from "./Banner";
import WeatherCard from "./WeatherCard";
import ForcastCard from "./ForcastCard";

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
        <Flex direction="column" gap="32px">
          <Banner />
          <HStack gap="24px" alignItems="center">
            <WeatherCard title="feels like" value="20" unit="°C" />
            <WeatherCard title="Humidity" value="46" unit="%" />
            <WeatherCard title="Wind" value="14" unit="Km/hr" />
            <WeatherCard title="Precipitation" value="0" unit="mm" />
          </HStack>
        </Flex>

        <Flex gap="20px">
          <ForcastCard
            imgSrc="/images/icon-rain.webp"
            day="Mon"
            highTemp="20°"
            lowTemp="13°"
          />
          <ForcastCard
            imgSrc="/images/icon-rain.webp"
            day="Mon"
            highTemp="20°"
            lowTemp="13°"
          />
          <ForcastCard
            imgSrc="/images/icon-rain.webp"
            day="Mon"
            highTemp="20°"
            lowTemp="13°"
          />
          <ForcastCard
            imgSrc="/images/icon-rain.webp"
            day="Mon"
            highTemp="20°"
            lowTemp="13°"
          />
          <ForcastCard
            imgSrc="/images/icon-rain.webp"
            day="Mon"
            highTemp="20°"
            lowTemp="13°"
          />
          <ForcastCard
            imgSrc="/images/icon-rain.webp"
            day="Mon"
            highTemp="20°"
            lowTemp="13°"
          />
          <ForcastCard
            imgSrc="/images/icon-storm.webp"
            day="Mon"
            highTemp="20°"
            lowTemp="13°"
          />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        gap="16px"
        p="24px"
        rounded="20px"
        width="384px"
        bg="var(--neutral-800)"
      >
        <HStack justifyContent="space-between">
          <Heading>Hourly forecast</Heading>
          <Menu.Root highlightedValue="mon">
            <Menu.Trigger>
              <Button>Hi</Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="tue">Tuesday</Menu.Item>
                  <Menu.Item>Wednesday</Menu.Item>
                  <Menu.Item>Thurday</Menu.Item>
                  <Menu.Item>Friday</Menu.Item>
                  <Menu.Item>Thurday</Menu.Item>
                  <Menu.Item>Saturday</Menu.Item>
                  <Menu.Item>Sunday</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </HStack>
      </Flex>
    </Flex>
  );
};
