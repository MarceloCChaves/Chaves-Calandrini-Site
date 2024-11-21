import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ data }) => {
  return (
    <div className="w-full h-auto">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="swiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.imagem}
              alt={`Slide ${item.id}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
