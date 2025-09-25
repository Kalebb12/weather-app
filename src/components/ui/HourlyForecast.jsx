import { dateFormatter } from "@/utils/DateFormatter";
import { timeFormatter } from "@/utils/TimeFormatter";
import { weatherCodeFormatter } from "@/utils/weatherCodeFormatter";
import {
  createListCollection,
  Flex,
  Heading,
  HStack,
  Image,
  Portal,
  Select,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HourlyForecastShadow from "./HourlyForecastShadow";

const HourlyForecast = ({ data }) => {
  if (!data) return <HourlyForecastShadow />;
  const dayNum = new Date().getDay();
  const [selectValue, setSelectValue] = useState(dayNum);
  const [dayShift, setDayShift] = useState(0);
  const days = createListCollection({
    items: [
      { label: "Monday", value: "mon", number: 1 },
      { label: "Tuesday", value: "tue", number: 2 },
      { label: "Wednesday", value: "wed", number: 3 },
      { label: "Thursday", value: "thu", number: 4 },
      { label: "Friday", value: "fri", number: 5 },
      { label: "Saturday", value: "sat", number: 6 },
      { label: "Sunday", value: "sun", number: 7 },
    ],
  });

  const handleSelectChange = (val) => {
    if (val < dayNum) {
      setSelectValue(val - (dayNum + 7));
    } else setSelectValue(val - dayNum);
  };

  const day = data.current.time;
  const today = dateFormatter(day, { weekday: "long" })
    ?.slice(0, 3)
    .toLowerCase();
  const sliceStartIndex = data.hourly.time.findIndex(
    (t) => t.slice(0, 13) === day.slice(0, 13)
  );

  useEffect(() => {
    setDayShift(selectValue * 24);
  }, [selectValue]);

  const hourlyTime = data.hourly.time.slice((sliceStartIndex + dayShift), (sliceStartIndex + dayShift + 8))
  const hourlyTemp = data.hourly.temperature_2m.slice((sliceStartIndex + dayShift), (sliceStartIndex + dayShift + 8))
  const hourlyWeatherCode = data.hourly.weather_code.slice((sliceStartIndex + dayShift), (sliceStartIndex + dayShift + 8))
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
        <Select.Root
          onValueChange={(val) => handleSelectChange(val.items[0].number)}
          defaultValue={[today]}
          collection={days}
          maxWidth="120px"
          positioning={{ placement: "bottom-end" }}
        >
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
          <Portal>
            <Select.Positioner>
              <Select.Content
                bg="var(--neutral-800)"
                width="212px"
                spaceY="4px"
                rounded="12px"
                p="6px 8px"
                border="1px solid var(--neutral-600)"
                shadow="box-shadow: 0px 8px 16px 0px #02012C52;"
              >
                {days.items.map((day) => (
                  <Select.Item
                    cursor="pointer"
                    p="10px 8px"
                    _hover={{ bg: "var(--neutral-700)" }}
                    rounded="8px"
                    item={day}
                    key={day.value}
                  >
                    {day.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      </HStack>

      {hourlyTime.map((time, index) => (
          <HStack
            bg="var(--neutral-700)"
            border="1px solid var(--neutral-600)"
            rounded="8px"
            gap="8px"
            p="10px 16px"
            justifyContent="space-between"
            fontWeight="medium"
            key={index}
          >
            <Image
              src={weatherCodeFormatter(hourlyWeatherCode[index])}
              alt=""
              width="40px"
              height="40px"
            />
            <Text fontSize="20px" flexGrow="1">
              {timeFormatter(time, {
                hour: "numeric",
                hour12: true,
              })}
            </Text>
            <Text fontSize="16px">
              {hourlyTemp[index]}&deg;
            </Text>
          </HStack>
        ))}
    </Flex>
  );
};

export default HourlyForecast;