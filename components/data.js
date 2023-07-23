import {
  AcademicCapIcon, AdjustmentsIcon, ChartSquareBarIcon, ClockIcon, CurrencyDollarIcon, CursorClickIcon,
  DeviceMobileIcon, EmojiHappyIcon, LightningBoltIcon, SunIcon
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {

  image: benefitOneImg,
  bullets: [
    {
      title: "Build",
      desc: "Experience Unmatched App Development Excellence with Our Iterative Approach, Delivering Regular Updates for iOS and Android Platforms",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Launch",
      desc: "Leverage our Versatile Building Blocks, Pre-configured Builds, and Robust Testing Pipelines to Fulfill Your Customized Needs.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Succeed",
      desc: "Develop Your App with Authentic Code Utilizing Popular Open-Source Frameworks, Guided by Expert Recommendations for the Ideal Framework Fit. Access Your Source Code Anywhere, Anytime for Seamless Collaboration.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


const features = [
  {
    title: "24/7 talent dedicated to you",
    desc: "Dedicated team of developers working on your App 24 hours a day, 7 days a week, with the ability to add more resources if the need arises or you revise the go-to-market delivery date.",
    icon: <ClockIcon /> // Example icon component for the second feature
  },
  {
    title: "Faster, Cheaper, Smarter, Better",
    desc: "Interact with true experts who will help you develop the best of the best apps based on your business requirements, as well as establish a dedicated delivery and go-to-market roadmap for your product.",
    icon: <LightningBoltIcon /> // Example icon component for the third feature
  },
  {
    title: "Variable Scope and Variable Costs",
    desc: "Begin with an all-in-one MVP cost with an upfront payment, while funding the complete cost of development over time, with unlimited scope changes.",
    icon: <CurrencyDollarIcon /> // Example icon component for the fourth feature
  },
  {
    title: "Off-the-Shelf Codes And PDS’s",
    desc: "Beginning by choosing from our library of thousands of customizable code modules.",
    icon: <AcademicCapIcon /> // Example icon component for the first feature
  },
];




export { benefitOne, benefitTwo, features };
