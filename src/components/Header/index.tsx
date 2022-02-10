import { Box, Image } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box as='header' py={30}>
      <Box maxWidth={1270} px={15} mx='auto'>
        <Image src='/images/logo.svg' alt='World Trip' mx='auto' />
      </Box>
    </Box>
  )
}