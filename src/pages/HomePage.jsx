import WeatherFeature from "@/components/ui/WeatherFeature"
import { Flex, Heading } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Flex direction="column" gap="64px" align="center">
      <Heading size="5xl" fontWeight="bold" fontFamily="var(--font-heading)">How’s the sky looking today?</Heading>
      <WeatherFeature />
    </Flex>
  )
}

export default HomePage