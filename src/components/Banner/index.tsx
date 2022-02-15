import { Box, Heading, Image } from "@chakra-ui/react"

type Banner = {
  image: string;
  name: string;
}

export const Banner = ({ name, image }: Banner) => {
  return (
    <Box as='section' position='relative' _before={{
      position: 'absolute',
      content: '""',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      bg: '#1c140159'
    }}>
      <Image src={image} alt={name} width="100%" height="auto" />
      <Heading fontSize='5xl' fontWeight='600' color='#F5F8FA' lineHeight='72px' position='absolute' left='140px' bottom='60px'>{name}</Heading>
    </Box>
  )
}