import { Box, Heading, Image, Link as ChakraLink, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Link from "next/link";

export const Carousel = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Link href='/city' passHref>
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
            <Image src="/images/europe.png" alt="Europa" width="1240px" height="450px" />
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} color="#fff" textAlign="center">
              <Heading fontSize="5xl" lineHeight="72px">Europa</Heading>
              <Text fontSize="2xl" fontWeight="700" color="#DADADA" mt="4">O continente mais antigo.</Text>
            </Box>
          </ChakraLink>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href='/city' passHref>
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
            <Image src="/images/europe.png" alt="Europa" width="1240px" height="450px" />
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} color="#fff" textAlign="center">
              <Heading fontSize="5xl" lineHeight="72px">Europa</Heading>
              <Text fontSize="2xl" fontWeight="700" color="#DADADA" mt="4">O continente mais antigo.</Text>
            </Box>
          </ChakraLink>
        </Link>
      </SwiperSlide>
      
      <SwiperSlide>
        <Link href='/city' passHref>
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
            <Image src="/images/europe.png" alt="Europa" width="1240px" height="450px" />
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} color="#fff" textAlign="center">
              <Heading fontSize="5xl" lineHeight="72px">Europa</Heading>
              <Text fontSize="2xl" fontWeight="700" color="#DADADA" mt="4">O continente mais antigo.</Text>
            </Box>
          </ChakraLink>
        </Link>
      </SwiperSlide>
      
      <SwiperSlide>
        <Link href='/city' passHref>
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
            <Image src="/images/europe.png" alt="Europa" width="1240px" height="450px" />
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} color="#fff" textAlign="center">
              <Heading fontSize="5xl" lineHeight="72px">Europa</Heading>
              <Text fontSize="2xl" fontWeight="700" color="#DADADA" mt="4">O continente mais antigo.</Text>
            </Box>
          </ChakraLink>
        </Link>
      </SwiperSlide>
      
      <SwiperSlide>
        <Link href='/city' passHref>
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
            <Image src="/images/europe.png" alt="Europa" width="1240px" height="450px" />
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} color="#fff" textAlign="center">
              <Heading fontSize="5xl" lineHeight="72px">Europa</Heading>
              <Text fontSize="2xl" fontWeight="700" color="#DADADA" mt="4">O continente mais antigo.</Text>
            </Box>
          </ChakraLink>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}