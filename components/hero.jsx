import { ArrowNarrowRightIcon, CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../public/img/hero.svg";
import heroImg2 from "../public/img/hero_1.svg";
import heroImg3 from "../public/img/hero_2.svg";
import Container from "./container";
import Navbar from "./navbar";

import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Hero() {
  return (
    <header className="h-screen flex flex-col">
      <Navbar />
      <Container className="flex grow flex-wrap h-full lg:mt-0">
        <div className="flex items-center justify-center w-full lg:w-1/2 h-full">
          <div className="max-w-xl mb-12 text-center lg:text-left">
            <h1 className="text-4xl font-normal leading-snug capitalize tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              A Faster and better way to build apps
            </h1>

            <div className="py-8 text-base leading-normal text-gray-600 lg:text-xl  dark:text-gray-300 space-y-7">
              <p>
                Launch 5X faster and 2X cheaper, with testable features every 2 weeks  with our data-driven app development platform.
              </p>

              <ul className="text-sm list flex lg:flex-col items-start flex-wrap justify-center content-between gap-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  Launch 5x
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                  2x Cheaper
                </li>
                <li className="flex items-start justify-start space-x-2">
                  <CheckCircleIcon className="w-5 h-5" />
                  <span className="">
                    New Testable Build every 2 weeks
                  </span>
                </li>
              </ul>
            </div>



            <Link
              href="/book_session"
              passHref>
              <a className="px-8 py-3 text-lg font-medium text-center w-max inline-flex items-center text-white bg-blue-500 rounded-xl ">
                Take the next step
                <ArrowNarrowRightIcon className="w-5 h-5 ml-3" />
              </a>

            </Link>

          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="hidden lg:block">
            <Swiper
              spaceBetween={20}
              effect={"fade"}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}

              modules={[Autoplay, EffectFade]}
            >
              <SwiperSlide>
                <SliderImage imageUrl={heroImg} alt="Hero Illustration 1" />
              </SwiperSlide>

              <SwiperSlide>
                <SliderImage imageUrl={heroImg3} alt="Hero Illustration 3" />
              </SwiperSlide>

              <SwiperSlide>
                <SliderImage imageUrl={heroImg2} alt="Hero Illustration 2" />
              </SwiperSlide>

              {/* <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </Container>
    </header>
  );
}


export const SliderImage = ({ imageUrl, alt }) => {
  return (
    <figure className="w-full h-full bg-white dark:bg-trueGray-900">
      <Image
        src={imageUrl}
        width={616}
        height={617}
        alt={alt}
        layout="intrinsic"
        loading="eager"
      />
    </figure>
  )
}

