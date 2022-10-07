import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Button from "react-bootstrap/Button";

const DashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-zinc-900">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" h-25 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <a href="/" className="flex items-center">
                  <Image
                    src="https://res.cloudinary.com/drr7rbizq/image/upload/v1664977190/logo-removebg-preview_1_jhx4kw.png"
                    className="mr-3 h-12 animate-pulse sm:h-24"
                    height={95}
                    width={95}
                    alt="Portfolio Logo"
                  />
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    PORTFOLIO-PRO
                  </span>
                </a>
              </div>
              <div
                className="hidden w-full md:block md:w-auto"
                id="mobile-menu"
              >
                <ul className="absolute right-0 top-7 flex flex-col rounded-lg bg-gray-50 mr-7 mb-3 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-zinc-900">
                  <li>
                    <a
                      href="/"
                      className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-110 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/edit"
                      className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-110 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                      aria-current="page"
                    >
                      START WITH THIS DESIGN
                    </a>
                  </li>
                  <li>
                    {/* <a
                      href="/dashboard"
                      className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    >
                      Weather
                    </a> */}
                     {/* <Button
                      variant="dark"
                      href="/edit"
                      className="mt-1 text-gray-100 bg-gray-500 hover:bg-white active:bg-white focus:outline-none focus:ring focus:ring-cyan-300"
                    >
                      START WITH THIS DESIGN
                    </Button> */}
                    <Button
                      variant="light"
                      href="/api/auth/signout"
                      className="mt-1 text-gray-100 bg-gray-500 hover:bg-white active:bg-white focus:outline-none focus:ring focus:ring-cyan-300"
                    >
                      LOG OUT
                    </Button>

                   
                  </li>
                </ul>
              </div>
            </div>
            <div className="-mr-2 flex">
              {/* <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                > */}
              <button
                data-collapse-toggle="navbar-default"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <a
                      href="/"
                      className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                    <a
                      href="/edit"
                      className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-110 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                      aria-current="page"
                    >
                      START WITH THIS DESIGN
                    </a>
                    <Button
                      variant="light"
                      href="/api/auth/signout"
                      className="mt-1 text-gray-100 bg-gray-500 hover:bg-white active:bg-white focus:outline-none focus:ring focus:ring-cyan-300"
                    >
                      LOG OUT
                    </Button>
{/* 
                    <Button
                      variant="dark"
                      href="/edit"
                      className="mt-1 text-gray-100 bg-gray-500 hover:bg-white active:bg-white focus:outline-none focus:ring focus:ring-cyan-300"
                    >
                      START WITH THIS DESIGN
                    </Button> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default DashboardNav;