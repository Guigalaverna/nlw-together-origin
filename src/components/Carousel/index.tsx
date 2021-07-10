import React from "react";
import SwiperCode, { Keyboard, Mousewheel, Pagination } from "swiper";
import "swiper/components/pagination/pagination.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { TestimonalCard } from "../TestimonialCard";
import "./styles.scss";

export function Carousel() {
  SwiperCode.use([Pagination, Keyboard, Mousewheel]);
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      className="testimonials-wrapper container"
      pagination
      mousewheel
      keyboard
    >
      <SwiperSlide>
        <TestimonalCard
          name="Wanessa Souza"
          avatar="https://randomuser.me/api/portraits/women/3.jpg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem
          magni tenetur! Eum incidunt nostrum, veritatis eveniet in inventore,
          sequi nihil ipsum optio maiores, sapiente earum laborum aliquid
          repudiandae atque? maça
        </TestimonalCard>
      </SwiperSlide>
      <SwiperSlide>
        <TestimonalCard
          name="Wanessa Souza"
          avatar="https://randomuser.me/api/portraits/women/3.jpg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem
          magni tenetur! Eum incidunt nostrum, veritatis eveniet in inventore,
          sequi nihil ipsum optio maiores, sapiente earum laborum aliquid
          repudiandae atque? banana
        </TestimonalCard>
      </SwiperSlide>
      <SwiperSlide>
        <TestimonalCard
          name="Wanessa Souza"
          avatar="https://randomuser.me/api/portraits/women/3.jpg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem
          magni tenetur! Eum incidunt nostrum, veritatis eveniet in inventore,
          sequi nihil ipsum optio maiores, sapiente earum laborum aliquid
          repudiandae atque? abacaxi
        </TestimonalCard>
      </SwiperSlide>
      <SwiperSlide>
        <TestimonalCard
          name="Wanessa Souza"
          avatar="https://randomuser.me/api/portraits/women/3.jpg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quidem
          magni tenetur! Eum incidunt nostrum, veritatis eveniet in inventore,
          sequi nihil ipsum optio maiores, sapiente earum laborum aliquid
          repudiandae atque? pera
        </TestimonalCard>
      </SwiperSlide>
    </Swiper>
  );
}
