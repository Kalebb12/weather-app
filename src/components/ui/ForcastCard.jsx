import { dateFormatter } from "@/utils/DateFormatter";
import { weatherCodeFormatter } from "@/utils/weatherCodeFormatter";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const ForcastCard = ({ day, weatherCode, highTemp, lowTemp }) => {
  const formattedDate = dateFormatter(day, { weekday: "short" });
  const imgSrc = weatherCodeFormatter(weatherCode);
  return (
    <Box
      textAlign="center"
      spaceY="16px"
      flexGrow={{md:"1",base:"0"}}
      width="104px"
      bg="var(--neutral-800)"
      border="1px solid var(--neutral-600)"
      rounded="12px"
      py="16px"
      px="10px"
    >
      <Text fontSize="18px" fontWeight="medium">
        {formattedDate}
      </Text>
      <Image 
        width="60px"
        height="60px"
        objectFit="cover"
        objectPosition="center"
        bg="transparent"
        src={imgSrc} alt="forcast"/>
      <HStack justifyContent="space-between">
        <Text>{parseInt(highTemp)}&deg;</Text>
        <Text>{parseInt(lowTemp)}&deg;</Text>
      </HStack>
    </Box>
  );
};

export default ForcastCard;
