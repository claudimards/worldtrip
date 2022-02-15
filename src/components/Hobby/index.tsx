import { Box, Heading, Image } from "@chakra-ui/react"

type HobbyProps = {
  hobby: string;
  image: string;
}

export const Hobby = ({ hobby, image }: HobbyProps) => {
  return (
    <Box as="article" maxWidth="max-content" textAlign="center" mx="auto">
      <Image src={`/images/${image}.svg`} alt="Coquetel" width={85} height={85} mx="auto" />
      <Heading fontWeight={600} color="#47585B" mt="6" fontSize="2xl">{hobby}</Heading>
    </Box>
  )
}