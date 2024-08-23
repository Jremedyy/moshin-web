import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Testimonial, { TestimonialProps } from "./Testimonial";

export const TestimonialTile = () => {
  const testimonials: TestimonialProps[] = [
    {
      imageUrl: "https://images.moshinremedia.com/testimonial-images%2Frob.png",
      description:
        "John is the best photographer I've worked with!  Excellent quality photos, listens to my unique needs for each property listing, easy to contact, and a great personality to boot!",
      author: "Rob Cashin",
    },
    {
      imageUrl:
        "https://images.moshinremedia.com/testimonial-images%2Fangie.png",
      description:
        "I always use John for my real estate listing pictures!  He is super professional, always on time or early and his shots are just what a buyer wants to see.  He makes the houses look great!  He even does drone shots!!",
      author: "Angie Cloutier",
    },
    {
      imageUrl:
        "https://images.moshinremedia.com/testimonial-images%2Fanna.png",
      description:
        "John did a great job capturing the photos for my seller. Was patient, on time, excellent communicator and reasonably priced. Will be using him in the future.",
      author: "Anna Brewster",
    },
    {
      imageUrl: "https://images.moshinremedia.com/testimonial-images%2Ftim.png",
      description:
        "John does amazing work and I would highly recommend him for your services! Very high quality handled with professionalism.",
      author: "Timothy Howard",
    },
  ];
  return (
    <Wrapper>
      <SwiperContainer>
        <Header>{"Testimonials"}</Header>
        <Swiper
          slidesPerView={1.1}
          spaceBetween={20}
          pagination={{
            clickable: false,
          }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          centeredSlides={true}
          centeredSlidesBounds={true}
          breakpoints={{
            768: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            1800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {testimonials.map((testimony, index) => {
            return (
              <SwiperSlide key={index}>
                <Testimonial
                  imageUrl={testimony.imageUrl}
                  description={testimony.description}
                  author={testimony.author}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0 20px 0;


`;

const SwiperContainer = styled.div`
  .swiper-pagination-horizontal {
    display: none;
  }

  .swiper-pagination-bullet {
    display: none;
  }
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next {
    display: none;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide {
    width: 60%;
  }

  .swiper-slide:nth-child(2n) {
    width: 40%;
  }

  .swiper-slide:nth-child(3n) {
    width: 20%;
  }
`;

const Header = styled.div`
  color: var(--Nutral-Gray-900, #0e0f10);
  text-align: center;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 44.8px */
  letter-spacing: -0.2px;
  margin-bottom: 30px;
  padding-top: 20px;
`;
