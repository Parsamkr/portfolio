import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { EffectCreative } from "swiper";
import "swiper/css/effect-creative";

const Slider = () => {
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      }}
      modules={[EffectCreative]}
      className="mySwiper"
    >
      {/* slides */}
      <SwiperSlide>
        <Image src="/1.jpg" alt="" fill sizes={"max-width:100%"} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/2.jpg" alt="" fill sizes={"max-width:100%"} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
