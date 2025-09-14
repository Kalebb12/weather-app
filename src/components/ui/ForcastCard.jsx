import { dateFormatter } from "@/utils/DateFormatter";
import { weatherCodeFormatter } from "@/utils/weatherCodeFormatter";
import { Avatar, Container, HStack, Text } from "@chakra-ui/react";

const ForcastCard = ({ day, weatherCode, highTemp, lowTemp }) => {
  const formattedDate = dateFormatter(day, { weekday: "short" });
  const imgSrc = weatherCodeFormatter(weatherCode);
  return (
    <Container
      textAlign="center"
      spaceY="16px"
      bg="var(--neutral-800)"
      border="1px solid var(--neutral-600)"
      rounded="12px"
      py="16px"
      px="10px"
    >
      <Text fontSize="18px" fontWeight="medium">
        {formattedDate}
      </Text>
      <Avatar.Root
        width="60px"
        height="60px"
        objectFit="cover"
        objectPosition="center"
        bg="transparent"
        rounded="none"
      >
        <Avatar.Image src={imgSrc} />
        <Avatar.Fallback name="Weather Forcast" />
      </Avatar.Root>
      <HStack justifyContent="space-between">
        <Text>{parseInt(highTemp)}&deg;</Text>
        <Text>{parseInt(lowTemp)}&deg;</Text>
      </HStack>
    </Container>
  );
};

export default ForcastCard;
