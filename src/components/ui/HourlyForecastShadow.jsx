import { Box, Flex, Heading, HStack, Select } from "@chakra-ui/react";
import React from "react";

const HourlyForecastShadow = () => {
  return (
    <Flex
      direction="column"
      gap="16px"
      p="24px"
      rounded="20px"
      width={{ lg: "384px", base: "full" }}
      bg="var(--neutral-800)"
    >
      <HStack justifyContent="space-between">
        <Heading fontSize="20px" fontWeight="semibold">
          Hourly forecast
        </Heading>
        <Select.Root width="67px">
          <Select.Control>
            <Select.Trigger
              p="12px 16px"
              spaceX="10px"
              bg="var(--neutral-600)"
              variant="subtle"
              rounded="8px"
              display="flex"
              gap="12px"
            >
              <Select.ValueText placeholder="-" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
        </Select.Root>
      </HStack>

      {Array(8)
        .fill(null)
        .map((_, index) => (
          <Box
            height="60px"
            bg="var(--neutral-700)"
            border="1px solid var(--neutral-600)"
            rounded="8px"
            gap="8px"
            p="10px 16px"
            justifyContent="space-between"
            fontWeight="medium"
            key={index}
          ></Box>
        ))}
    </Flex>
  );
};

export default HourlyForecastShadow;
