import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"

const Error = () => {
  return (
    <Flex direction="column" gap="24px" alignItems="center" justifyContent="center">
      <Image src="/images/icon-error.svg" alt="Error Icon" width="42px" height="50px" />
      <Heading fontWeight={700} fontSize={52} fontFamily="var(--font-heading)">Something went wrong</Heading>
      <Text fontWeight={500} fontSize={20} color="var(--neutral-200)">We couldn’t connect to the server (API error). Please try again in a few moments.</Text>
      <Button onClick={() => window.location.reload()} bg="#262540" color="white" px="16px" py="12px"><Image src="/images/icon-retry.svg" alt="retry icon" width="16px" height="16px" />Retry</Button>
    </Flex>
  )
}

export default Error