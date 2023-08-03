import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Logo from "./Logo";

export default function Navbar({ inverse = false }) {
  const navigation = [
    { value: "Our Vision", href: "/vision" },
    { value: "Solution", href: "#" },
  ];

  const router = useRouter()

  return (
    <div className="w-full h-fit">
      <nav className="container relative flex flex-wrap items-center justify-between px-4 lg:px-5 pt-8 pb-8 lg:pb-3 mx-auto lg:justify-between">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <div className="flex items-center space-x-2">
                  <Logo withBackArrow={router.pathname !== "/"} inverse={inverse} />
                </div>

                <div className="space-x-3 flex lg:hidden">
                  <ThemeChanger inverse={inverse} />
                </div>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className={`px-2 py-1 transition-all duration-300 ${inverse ? "text-white" : "text-gray-500"} rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700 z-20 
                  ${open ? "fixed right-4" : "relative "}`}>
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className={`flex flex-col items-center justify-center lg:hidden bg-white dark:bg-gray-500 fixed z-10 top-0 left-0 w-screen h-screen transition-all duration-500 `}>
                  <>
                    {navigation.map(({ value, href }, index) => (
                      <Link key={index} href={href}>
                        <a className={`px-4 py-2 -ml-4  text-gray-800 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700`}>
                          {value}
                        </a>
                      </Link>
                    ))}
                    <GetStartedLink />
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>


        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {/*Theme switch */}
            <li className="hidden mr-3 space-x-3 lg:flex nav__item">
              <ThemeChanger inverse={inverse} />
            </li>
            {navigation.map(({ value, href }, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={href}>
                  <a className={`inline-block px-4 py-2 text-base font-normal ${inverse ? "text-white" : "text-gray-800"} no-underline rounded-md dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-indigo-100 focus:outline-none`}>
                    {value}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <GetStartedLink className={`${inverse ? "!text-blue-500 bg-white" : ""} `} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


const GetStartedLink = ({ className = "" }) => {
  return (
    <Link
      href="/book_session"
      passHref>
      <a className={`px-4 py-2.5 text- font-medium text-center w-max inline-flex items-center text-white bg-blue-500 rounded-xl ${className} `}>
        Get Started
      </a>

    </Link>
  )
}
