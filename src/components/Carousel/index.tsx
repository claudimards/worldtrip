import { Swiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { CarouselItem } from "./CarouselItem";

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
      loop={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {continents.map(continent => (

        <CarouselItem
          key={continent.id}
          name={continent.name}
          title={continent.title}
          link={continent.link}
          image={continent.carouselUrl}
        />
        
      ))}
    </Swiper>
  )
}