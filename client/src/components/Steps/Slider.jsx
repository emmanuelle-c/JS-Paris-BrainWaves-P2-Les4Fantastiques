/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import sliderOne from "../../assets/images/etapes/etape-1.svg";
import sliderTwo from "../../assets/images/etapes/etape-2.svg";
import sliderThree from "../../assets/images/etapes/etape-3.svg";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <Swiper id="link-burger"
      effect="flip"
      grabCursor
      pagination
      navigation
      modules={[EffectFlip, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="upText">
          <p id="how">Comment ça marche ?</p>
          <p className="number" id="how">
            &nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className="downTextImg">
          <img className="imgStep" alt="image1" src={sliderOne} />
          <div className="downText">
            <p className="question">Vous avez besoin d'un super-héro ? </p>
            <p className="response">
              Que ça soit pour un anniversaire, un déménagement ou un cours
              particulier ! Notre site est fait pour ça !{" "}
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="upText">
          <p id="how">Comment ça marche ?</p>
          <p className="number2" id="how">
            &nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className="downTextImg">
          <img className="imgStep" alt="image2" src={sliderTwo} />
          <div className="downText">
            <p className="question">Vous trouvez votre super-héro. </p>
            <p className="response">
              Vous pouvez réserver les services de vos super-héros en fonction
              de vos besoins !{" "}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="upText">
          <p id="how">Comment ça marche ?</p>
          <p className="number3" id="how">
            &nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className="downTextImg">
          <img className="imgStep" alt="image3" src={sliderThree} />
          <div className="downText">
            <p className="question">Vous profitez de votre super-héro. </p>
            <p className="response">
              Il ne vous reste qu'à passer du bon temps quelque soit l'occasion
              !{" "}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
