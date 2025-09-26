import Error from "@/components/ui/Error"
import WeatherFeature from "@/components/ui/WeatherFeature"
import { useFetch } from "@/context/fetchWeather"
import { Flex, Heading } from "@chakra-ui/react"

const HomePage = () => {
    const {error} = useFetch()
    if (error) return <Error />
  return (
    <Flex direction="column" gap="64px" align="center">
      <Heading size="5xl" fontWeight="bold" fontFamily="var(--font-heading)">How’s the sky looking today?</Heading>
      <WeatherFeature />
    </Flex>
  )
}

export default HomePage