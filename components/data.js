import {
  AcademicCapIcon, AdjustmentsIcon, ChartSquareBarIcon, ClockIcon, CurrencyDollarIcon, CursorClickIcon,
  DeviceMobileIcon, EmojiHappyIcon, SunIcon, LightningBoltIcon, UserIcon, BadgeCheckIcon, ShieldCheckIcon
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


const values = [
  {
    title: "Collaboration",
    desc:
      "Promoting teamwork, open communication, and collaboration among team members and stakeholders. This value supports the emphasis on collaborative software development and involving everyone needed to achieve results.",
    icon: <UserIcon />,
  },
  {
    title: "Agility",
    desc:
      "Emphasizing agility and adaptability in responding to changes in the technology space. This value aligns with the iterative approach mentioned in the vision statement, allowing the organization to quickly adapt and deliver software efficiently.",
    icon: <LightningBoltIcon />,
  },
  {
    title: "Customer Focus",
    desc:
      "Prioritizing the needs and goals of customers, aiming to understand their requirements and provide software solutions that help their businesses scale fast. This value emphasizes the customer-centric approach mentioned in the vision statement.",
    icon: <EmojiHappyIcon />,
  },
  {
    title: "Excellence",
    desc:
      "Striving for excellence in all aspects of software development, maintaining high standards of quality, efficiency, and performance. This value reflects the organization's commitment to building software fast and efficiently.",
    icon: <BadgeCheckIcon />,
  },
  {
    title: "Integrity",
    desc:
      "Conducting business with honesty, ethics, and transparency, fostering trust with customers, partners, and employees. This value is essential for establishing strong relationships and maintaining a positive reputation in the technology space.",
    icon: <ShieldCheckIcon />,
  },
]


const businessPackages = [
  {
    id: 1,
    hours: 40,
    description: "Enhance your social media presence with 40 hours of dedicated expert time. Engage your audience, schedule posts strategically, and boost your app's visibility."
  },
  {
    id: 2,
    hours: 80,
    description: "Double the impact with 80 hours of focused efforts. Our team will craft compelling content, analyze performance, and optimize your social media strategy for maximum results. This includes services from all the other previous packages."
  },
  {
    id: 3,
    hours: 120,
    description: "Elevate your brand with 120 hours of expert attention. From creating engaging visuals to running targeted campaigns, we ensure your app reaches the right audience at the right time. This includes services from all the other previous packages."
  },
  {
    id: 4,
    hours: 160,
    description: "Dominate the social media landscape with 160 hours of comprehensive support. We handle every aspect of your social media strategy, leaving you free to focus on app excellence. This includes services from all the other previous packages."
  }
];


const pricingData = {
  excerpt: `
  Our development cost is $53 per hour. To initiate the project, a 50% down payment is required ( negotiable) . The remaining 50% will be spread over the development cycle, with an additional 40 hours covered by us, focused on App launch preparation and post-launch support. Additionally, you'll receive 10 hours of post-development support credits to address any critical issues that may arise.`,
  content: `
  Our development cost is $53 per hour, with a 50% down payment to initiate the project. The remaining 50% is spread over the development cycle, allowing you to manage payments with ease. With our flexible financing model, you can opt for monthly invoicing, making it convenient to handle ongoing changes and updates to the scope of work.

  Our monthly invoicing structure ensures that you have a set amount to pay each month, providing the freedom to make as many changes to the app as necessary. Any additional costs incurred during the development process will be rolled over to the following month, ensuring a smooth and transparent payment process.
  
  In the last quarter of development, our dedicated team will prepare all materials necessary for the successful launch of your app. We cover these materials, including promotional materials, marketing plans, social media plans, and all associated graphics works, up to a total of 40 hours. This ensures a seamless and impactful app launch, with our team taking care of all pre-launch and post-launch materials.
  
  With our pricing structure, you can confidently embark on your app development journey, knowing that we provide a comprehensive and inclusive package to support your success from start to finish. Let us help you bring your app vision to life with ease and excellence!
  `,

  packages: businessPackages
}

// You can access the packages using businessPackage[0], businessPackage[1], etc.


export { benefitOne, benefitTwo, features, values, pricingData };
