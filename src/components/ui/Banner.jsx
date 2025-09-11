import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'

const Banner = () => {
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
              Berlin, Germany
            </Heading>
            <Text fontWeight="medium" fontSize="18px">
              Tuesday, Aug 5, 2025
            </Text>
          </VStack>
          <HStack gap="20px" width="fit-content">
            <Image
              width="120px"
              height="120px"
              src="/images/icon-sunny.webp"
              alt="sun"
            />
            <Text fontWeight="600" fontSize="96px" fontStyle="italic">
              20°
            </Text>
            <Image src="/images/banner-cloud-1.png" bottom={0} right={0} alt="" position="absolute"/>
            <Image src="/images/banner-cloud-2.png" bottom={0} left={0} alt="" position="absolute"/>
            <Image src="/images/banner-star.svg" top="34px" left="356px"  alt="" position="absolute"/>
            <Image src="/images/banner-star.svg" top="222px" left="310px" alt="" position="absolute"/>
          </HStack>
        </HStack>
  )
}

export default Banner