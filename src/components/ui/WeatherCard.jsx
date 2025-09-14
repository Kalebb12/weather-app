import { Card, Container, Text } from "@chakra-ui/react"

const WeatherCard = ({title,value,unit}) => {
  return (
    <Container spaceY="24px" fluid width="full" bg="var(--neutral-800)" border="1px solid var(--neutral-600)" rounded="12px" p="20px">
        <Text color="var(--neutral-200)" fontWeight="medium" fontSize="18px">{title || "-" }</Text>
        <Text fontWeight="light" color="var(--neutral-0)" fontSize="32px">{parseInt(value)} {unit || "-"}</Text>
    </Container>
  )
}

export default WeatherCard