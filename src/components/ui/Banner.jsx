import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import PendingBanner from "./PendingBanner";
import { dateFormatter } from "@/utils/DateFormatter";
import { weatherCodeFormatter } from "@/utils/weatherCodeFormatter";

const Banner = ({ isPending, data }) => {
  if (isPending) return <PendingBanner />;

  const imgSrc = weatherCodeFormatter(data?.current.weather_code);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = dateFormatter(data?.current.time, options);
  return (
    <HStack
      position="relative"
      bg="var(--banner-gradient)"
      py="var(--spacing-1000)"
      px="var(--spacing-300)"
      rounded="20px"
      overflow="hidden"
    >
      <VStack align="start" flexGrow="1" gap="12px">
        <Heading fontSize="28px" fontWeight="bold">
          Berlin,Germany
        </Heading>
        <Text fontWeight="medium" fontSize="18px">
          {formattedDate}
        </Text>
      </VStack>
      <HStack gap="20px" width="fit-content">
        <Image
          width="120px"
          height="120px"
          src={imgSrc}
          alt="current forecast"
        />
        <Text fontWeight="600" fontSize="96px" fontStyle="italic">
          {parseInt(data?.current.temperature_2m)}{data?.current_units.temperature_2m}
        </Text>
        <Image
          src="/images/banner-cloud-1.png"
          draggable="false"
          bottom={0}
          right={0}
          alt=""
          position="absolute"
        />
        <Image
          src="/images/banner-cloud-2.png"
          draggable="false"
          bottom={0}
          left={0}
          alt=""
          position="absolute"
        />
        <Image
          src="/images/banner-star.svg"
          draggable="false"
          top="34px"
          left="356px"
          alt=""
          position="absolute"
        />
        <Image
          src="/images/banner-star.svg"
          draggable="false"
          top="222px"
          left="310px"
          alt=""
          position="absolute"
        />
      </HStack>
    </HStack>
  );
};

export default Banner;
