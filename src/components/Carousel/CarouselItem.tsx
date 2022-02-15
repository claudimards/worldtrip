import { Box, Heading, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

import { SwiperSlide } from "swiper/react";

type CarouselItemProps = {
  name: string;
  title: string;
  link: string;
  image: string;
}

export const CarouselItem = ({ name, title, link, image }: CarouselItemProps) => {
  return (
    <SwiperSlide>
      <Link href={link} passHref>
        <ChakraLink
          position="relative"
          display="block"
          _before={{
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            zIndex: 1,
            width: '100%',
            height: '100%',
            bg: '#1C140159'
          }}
        >
          <Image src={image} alt={name} width="1240px" height="450px" />
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} color="#fff" textAlign="center">
            <Heading fontSize="5xl" lineHeight="72px">{name}</Heading>
            <Text fontSize="2xl" fontWeight="700" color="#DADADA" mt="4">{title}</Text>
          </Box>
        </ChakraLink>
      </Link>
    </SwiperSlide>
  )
}