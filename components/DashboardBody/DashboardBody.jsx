import classes from "./DashboardBody.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import homeimg from "../../public/images/homeimg.jpg";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function DashboardBody(props) {
  const { data: session, status } = useSession();
  return (
    <section>
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
                        className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                        aria-current="page"
                      >
                        View Demo Site
                      </a>
                    </li>
                    <li>
                      <Button
                        variant="dark"
                        href="/dashboard"
                        className="mt-1 hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:hover:text-white md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                      >
                        START WITH THIS DESIGN
                      </Button>
                    </li>
                    {/* <li>
                                            <a
                                                href="#"
                                                className="block rounded py-2 pr-4 pl-3 text-2xl text-gray-700 hover:scale-125 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                                            >
                                                About Us
                                            </a>
                                        </li> */}
                    {/* <li>
                    <a
                      href="/signin"
                      className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    >
                      SIGN IN
                    </a>
                  </li> */}
                    {/* <li>
                                            <a
                                                href="/Crop"
                                                className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                                            >
                                                Crop
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/Fertilizer"
                                                className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                                            >
                                                Fertilizer
                                            </a>
                                        </li> */}
                    {/* <li>
                                            <a
                                                href="/Profit"
                                                className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                                            >
                                                Profit
                                            </a>
                                        </li> */}
                    <li>
                      {/* <a
                      href="/dashboard"
                      className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    >
                      Weather
                    </a> */}
                      <Button
                        variant="white"
                        href="/dashboard"
                        className="mt-1 text-gray-100 bg-gray-500 hover:bg-white active:bg-white focus:outline-none focus:ring focus:ring-cyan-300"
                      >
                        GET STARTED
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

                  <Button
                    variant="dark"
                    href="/dashboard"
                    className="mt-1 hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:hover:text-white md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    LOG OUT
                  </Button>

                  <a
                    href="/"
                    className="duration-0 block rounded py-2 pr-4 pl-3 text-xl text-gray-100 transition hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    aria-current="page"
                  >
                    View Demo Site
                  </a>
                  <Button
                    variant="dark"
                    href="/dashboard"
                    className="mt-1 hover:scale-125 hover:bg-gray-100 hover:duration-150 dark:hover:text-white md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    START WITH THIS DESIGN
                  </Button>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>

      {/* <Navbar fixed="top" bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand style={{ fontWeight: "bold" }} href="/">
                        PORTFOLIO PRO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className="">
                            {status === "authenticated" && (
                                <Nav.Link
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signOut();
                                    }}
                                    href="/api/auth/signout"
                                >
                                    LOG OUT
                                </Nav.Link>
                            )}
                            <Nav.Link href={props.url}>VIEW DEMO SITE</Nav.Link>
                            <Button variant="dark" href="/edit">
                                START WITH THIS DESIGN
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
      <div className={classes.body}>
        <Image src={homeimg} alt="home-image" />
      </div>
    </section>
  );
}
