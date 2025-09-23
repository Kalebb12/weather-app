import { Box, Text } from "@chakra-ui/react"

const WeatherCard = ({title,value,unit}) => {
  const int = isNaN(Math.round(value)) ?  "" : Math.round(value)
  
  return (
    <Box spaceY="24px" flexGrow={{md:"1",base:"0"}} width="163.5px" bg="var(--neutral-800)" border="1px solid var(--neutral-600)" rounded="12px" p="20px">
        <Text color="var(--neutral-200)" fontWeight="medium" fontSize="18px">{title || "-" }</Text>
        <Text fontWeight="light" color="var(--neutral-0)" fontSize="32px">{int}{unit || "-"}</Text>
    </Box>
  )
}

export default WeatherCard