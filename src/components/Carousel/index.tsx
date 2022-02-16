import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import Link from "next/link";
import { Box, Heading, Image, Text, Link as ChakraLink } from "@chakra-ui/react";

type Continent = {
  id: string;
  name: string;
  title: string;
  link: string;
  carouselUrl: string;
}

type CarouselProps = {
  continents: Continent[]
}

export const Carousel = ({ continents }: CarouselProps) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      autoplay={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.id}>
          <Link href={`/continent/${continent.link}`} passHref>
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
              <Image src={continent.carouselUrl} alt={continent.name} width="1240px" height="450px" />
              <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" zIndex={1} color="#fff" textAlign="center">
                <Heading fontSize={["2xl", "5xl"]} lineHeight={["36px", "72px"]}>{continent.name}</Heading>
                <Text fontSize={["sm", "2xl"]} fontWeight="700" color="#DADADA" mt="4">{continent.title}</Text>
              </Box>
            </ChakraLink>
          </Link>
        </SwiperSlide>
      ))}
      
    </Swiper>
  )
}