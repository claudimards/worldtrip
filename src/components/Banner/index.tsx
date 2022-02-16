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
      <Heading
        fontSize={['2xl', '5xl']}
        fontWeight='600' color='#F5F8FA'
        lineHeight={['42px', '72px']}
        position='absolute'
        left={['50%', '140px']}
        bottom={['50%', '60px']}
        transform={['translate(-50%, 50%)', 'translate(0, 0)']}
        w="max-content"
      >
        {name}
      </Heading>
    </Box>
  )
}