import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import Container from "./container";
import Link from "next/link"

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-7xl gap-5 mx-auto text-white bg-blue-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Transform your vision into reality with AntBuilder
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 text-sm">
            Turning ideas and specification into powerful code. click on the button to get started now
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/book_session"
            target="_blank"
            rel="noopener"
          >
            <a className="py-3 mx-auto text-lg inline-flex items-center font-medium text-center bg-yellow-500 text-white px-7 lg:px-10 lg:py-5 rounded-lg">
              Get started now <ArrowNarrowRightIcon className="w-5 h-5 ml-3" />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
