import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Benefits from "../components/benefits";
import Cta from "../components/cta";
import { benefitOne, features } from "../components/data";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Video from "../components/video";
import Features from "../components/Features";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Ant builder </title>
        <meta
          name="description"
          content="Antbuilder is a platform that builds you app for you"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <SectionTitle
        pretitle="Develop from pre-existing modules"
        title=" That are exclusively available to you" />
      <Features data={features} />


      <SectionTitle
        pretitle="Antbuilder Benefits"
        title="Unleash the Power of Iterative App Development with Antbuilder" />
      <Benefits data={benefitOne} />

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        We have compiled a list of commonly asked questions for you
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
