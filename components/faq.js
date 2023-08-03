import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="mb-10">
      <div className="w-full p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}
const faqdata = [
  {
    question: "What makes your software/app development company unique?",
    answer: "At Antbuilder we take pride in our innovative approach to development. We use reusable modules/components, which enables us to build applications more efficiently and cost-effectively. Our strategic product roadmaps and go-to-market strategies ensure that your app development aligns with your business goals, making us specialists in building and promoting app developments."
  },
  {
    question: "How do you ensure the security of our app and its data?",
    answer: "Security is our top priority. We implement industry-best practices to safeguard your app and data. Our development team follows strict security guidelines, conducts regular security audits, and uses encryption protocols to protect sensitive information."
  },
  {
    question: "Can you build custom applications tailored to our specific needs?",
    answer: "Absolutely! We excel in creating custom applications to suit your unique requirements. Our team will work closely with you to understand your business needs and deliver a tailor-made solution that fits your goals."
  },
  {
    question: "What kind of support do you offer during the development process?",
    answer: "We provide end-to-end support throughout the development process. From the initial planning and design stages to deployment and beyond, our dedicated team of experts will be available to address any questions or concerns you may have."
  },
  {
    question: "How long does it typically take to develop an app?",
    answer: "The timeline for app development varies depending on the complexity and scope of the project. Our team will provide you with a detailed project plan and timeline, keeping you informed at every stage."
  },
  {
    question: "What platforms do you develop apps for?",
    answer: "We specialize in developing apps for a wide range of platforms, including iOS, Android, and web-based applications."
  },
  {
    question: "Can you assist with app marketing and promotion?",
    answer: "Absolutely! We offer marketing and promotion services to help your app gain traction in the market. Our go-to-market strategies and promotional expertise will increase your app's visibility and user base."
  },
  {
    question: "What if we need updates or additional features in the future?",
    answer: "We understand that apps may require updates or new features over time. We provide ongoing maintenance and support services to ensure your app stays up-to-date and meets evolving user needs."
  },
  {
    question: "How do I get started with your company for my app development project?",
    answer: "Getting started is easy! Simply reach out to us through our website or contact our sales team. We'll set up an initial consultation to discuss your project requirements and take it from there."
  },
  {
    question: "Can you provide references or case studies of your successful app developments?",
    answer: "Certainly! We have a portfolio of successful app developments, along with customer references and case studies, that showcase our expertise and track record of delivering exceptional results."
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, absolutely! We provide comprehensive technical support to all our valued customers. Our dedicated support team is available to assist you with any technical issues or challenges you may encounter while working with us or about your apps.\n\nWhether it's a question about functionality, troubleshooting, or general inquiries, our technical support team is ready to help. You can reach out to us through various channels, such as email, Social media channel, or a dedicated project channel on slack.\n\nIf you need technical assistance or have any questions, don't hesitate to contact our support team, and we'll be more than happy to assist you!"
  },
  {
    question: "When will the entire app be available?",
    answer: "The app's availability timeline depends on complexity, features, and specific requirements. Typically, an MVP is developed within 3 months, with new features released every two weeks. For an accurate estimate, let's discuss your app's goals. Rest assured, we'll keep you informed throughout development. Contact our sales team or visit our website to schedule a consultation."
  }
];

// Feel free to add more questions and answers to the array if needed.

