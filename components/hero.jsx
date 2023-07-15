import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.svg";
import { ArrowNarrowRightIcon, CheckCircleIcon } from "@heroicons/react/solid";
import Link from "next/link"

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap lg:mb-20 mt-5 lg:mt-0">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-xl mb-12 text-center lg:text-left">
            <h1 className="text-4xl font-normal leading-snug capitalize tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              A Faster and better way to build apps
            </h1>

            <div className="py-8 text-base leading-normal text-gray-600 lg:text-xl  dark:text-gray-300 space-y-7">
              <p>
                Launch 5X faster and 2X cheaper, will Testable Apps every 2 weeks  with our data-driven app development platform.
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
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="hidden lg:block">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

