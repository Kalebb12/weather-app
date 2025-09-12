import { VStack, Text } from "@chakra-ui/react";

const PendingBanner = () => {
  // alert("pending...")
  return (
    <VStack
      bgImage="url(/images/noisy.png)"
      justifyContent="center"
      alignItems="center"
      py="var(--spacing-1000)"
      px="var(--spacing-300)"
      height="286px"
      rounded="20px"
      overflow="hidden"
    >
      <div className="loader" />
      <Text color="var(--neutral-200)">Loading...</Text>
      
    </VStack>
  );
};

export default PendingBanner;
