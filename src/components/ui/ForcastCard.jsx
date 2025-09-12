import { Avatar, Container, HStack, Text } from "@chakra-ui/react";

const ForcastCard = ({ day, imgSrc, highTemp, lowTemp }) => {
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
        {day}
      </Text>
      <Avatar.Root width="60px" height="60px" objectFit="cover" objectPosition="center" rounded="none">
        <Avatar.Image src={imgSrc} />
        <Avatar.Fallback name="Weather Forcast" />
      </Avatar.Root>
      <HStack justifyContent="space-between">
        <Text>{highTemp}</Text>
        <Text>{lowTemp}</Text>
      </HStack>
    </Container>
  );
};

export default ForcastCard