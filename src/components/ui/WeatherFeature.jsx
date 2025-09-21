import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Banner from "./Banner";
import WeatherCard from "./WeatherCard";
import ForcastCard from "./ForcastCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getLocation } from "@/services/forecastApi";
import SearchDropdown from "./SearchDropdown";
import useForecast from "@/hooks/useForecast";

const WeatherFeature = () => {
  const [location, setLocation] = useState("");


  const handleSearch = () => {
    getLocationData(location);
  };

  const {
    mutate: getLocationData,
    data ,
    isPending,
  } = useMutation({
    mutationFn: () => getLocation(location),
  });

  return (
    <Flex direction="column"  gap="48px" width="full" alignItems="center">
      <Flex gap="18px" flexDirection={{sm:"row",base:"column"}} justifyContent="center" width="full" position="relative">
        <InputGroup startElement={<FaSearch color="var(--neutral-0)" />} width={{md:"fit",base:"full"}}>
          <Input
            width={{md:"526px",base:"full"}}
            rounded="12px"
            bg="var(--neutral-800)"
            border="none"
            outline="none"
            py="16px"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            px="24px"
            placeholder="Search for a place.."
          />
        </InputGroup>

        <SearchDropdown cityOptions={data?.results}/>

        <Button
          rounded="12px"
          bg="var(--blue-500)"
          color="var(--neutral-0)"
          px="24px"
          py="16px"
          onClick={handleSearch}
          loading={isPending}
          loadingText="loading..."
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
  const {data,isPending,error} = useForecast()
  return (
    <Flex gap="32px" flexDirection="column"  lg={{flexDirection:"row",alignItems:"start"}} base={{alignItems:"center"}} justifyContent="center" width="full">
      <Flex direction="column" gap="48px" width={{lg:"800px",base:"full"}}>
        <Flex direction="column" gap="32px">
          <Banner isPending={isPending} data={data} />
          <Flex gap={{sm:"20px",base:"16px"}} md={{gap:"24px"}} flexWrap={{md:"nowrap",base:"wrap"}} alignItems="center">
            <WeatherCard title="feels like" value={data?.current.apparent_temperature} unit="&deg;" />
            <WeatherCard title="Humidity" value={data?.current.relative_humidity_2m} unit={data?.current_units.relative_humidity_2m} />
            <WeatherCard title="Wind" value={data?.current.wind_speed_10m} unit={data?.current_units.wind_speed_10m} />
            <WeatherCard title="Precipitation" value={data?.current.precipitation} unit={data?.current_units.precipitation} />
          </Flex>
        </Flex>

        <Flex gap={{sm:"20px",base:"16px"}} flexWrap={{md:"nowrap",base:"wrap"}}>
          {
            data?.daily.time.map((time,index) => (
              <ForcastCard
                key={index}
                weatherCode={data?.daily.weather_code[index]}
                // imgSrc="/images/icon-rain.webp"
                day={time}
                highTemp={data?.daily.temperature_2m_max[index]}
                lowTemp={data?.daily.temperature_2m_min[index] }
              />
            ))
          }
        </Flex>
      </Flex>
      <Flex
        direction="column"
        gap="16px"
        p="24px"
        rounded="20px"
        width={{lg:"384px",base:"full"}}
        bg="var(--neutral-800)"
      >
        <HStack justifyContent="space-between">
          <Heading>Hourly forecast</Heading>
          <Menu.Root highlightedValue="mon">
            <Menu.Trigger asChild>
              <Button
                p="12px 16px"
                spaceX="10px"
                bg="var(--neutral-600)"
                variant="subtle"
                rounded="8px"
              >
                Days
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content
                  bg="var(--neutral-800)"
                  width="214px"
                  spaceY="4px"
                  rounded="12px"
                  p="6px 8px"
                  border="1px solid var(--neutral-600)"
                  shadow="box-shadow: 0px 8px 16px 0px #02012C52;"
                >
                  <Menu.Item
                    cursor="pointer"
                    p="10px 8px"
                    bg="var(--neutral-700)"
                    rounded="8px"
                    value="tue"
                  >
                    Tuesday
                  </Menu.Item>
                  <Menu.Item
                    cursor="pointer"
                    p="10px 8px"
                    bg="var(--neutral-700)"
                    rounded="8px"
                  >
                    Wednesday
                  </Menu.Item>
                  <Menu.Item
                    cursor="pointer"
                    p="10px 8px"
                    bg="var(--neutral-700)"
                    rounded="8px"
                  >
                    Thurday
                  </Menu.Item>
                  <Menu.Item
                    cursor="pointer"
                    p="10px 8px"
                    bg="var(--neutral-700)"
                    rounded="8px"
                  >
                    Friday
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </HStack>
      </Flex>
    </Flex>
  );
};
