"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { imageUrlConstant } from "@/constants";
import { motion } from "framer-motion";

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Icon = ({ onClick }) => (
  <button onClick={onClick} className="lg:hidden text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="size-6"
      color="#ffff"
    >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

const HamburgerIcon = ({ onClick }) => (
  <button onClick={onClick} className="lg:hidden text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      color="white"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>
);

const Header = ({ isSticky = true }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigation = (data) => {
    router.push(data || "/");
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsSearchOpen(false); // Close search if menu is opened
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setIsMenuOpen(false); // Close menu if search is opened
  };

  return (
    <nav className={isSticky ? "bg-[#ed1c24] sticky top-0 z-20" : "bg-[#ed1c24] z-20"}>
      <header className="flex flex-col lg:flex-row h-[auto]  w-[auto] shrink-0 px-4 md:px-6 bg-[#ed1c24] shadow-lg max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"} className="mr-6 flex items-center" prefetch={false}>
              <img
                loading="lazy"
                src={imageUrlConstant?.logoUrl}
                alt="logo"
                className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] pt-[5px]"
              />
            </Link>
          </div>

          <div className="flex gap-[10px]">
            <Icon onClick={toggleSearch} />
            <HamburgerIcon onClick={toggleMenu} />
          </div>
        </div>

        <div className="flex justify-start lg:gap-[60px] xl:gap-[120px] items-center w-full">
          <div className="items-center flex-1 bg-white-10 w-[auto] rounded-full px-3 hidden lg:flex">
            <SearchIcon />
            <input
              className="pl-2 w-full h-10 min-w-[100px] rounded-lg bg-white-10 outline-none transition-colors duration-300 ease-in-out"
              placeholder="Search courses, resources, and more..."
              type="text"
            />
          </div>

          <div className={`flex-col gap-[10px] lg:flex-row items-center justify-start md:justify-end ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}>
            <div className="items-center gap-10 text-white-10 cursor-pointer hidden lg:flex">
              <motion.button whileTap={{ scale: 0.85 }} onClick={() => navigation("/courses")}>
                <span className="whitespace-nowrap text-ellipsis">Courses</span>
              </motion.button>
              <motion.button whileTap={{ scale: 0.85 }} onClick={() => navigation("/about")}>
                <span className="whitespace-nowrap text-ellipsis">About</span>
              </motion.button>
              <motion.button onClick={() => navigation("/contact-us")} whileTap={{ scale: 0.85 }}>
                <span className="whitespace-nowrap text-ellipsis">Contact Us</span>
              </motion.button>
            </div>
            <div className="ml-[10px] flex gap-2 hidden lg:flex">
              <button
                onClick={() => navigation("/login")}
                className="text-white-10 hover:bg-linear-grad-yellow-10 whitespace-nowrap text-ellipsis cursor-pointer bg-black-10 h-10 px-3 rounded-sm"
              >
                Login
              </button>
              <button
                onClick={() => navigation("/sign-up")}
                className="hover:bg-linear-grad-yellow-10 text-black whitespace-nowrap text-ellipsis cursor-pointer bg-white-10 px-3 h-10 text-center grid place-items-center rounded-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="flex flex-col gap-[20px] lg:hidden bg-[#ed1c24] px-4 py-4">
          <div className="flex flex-col items-start gap-[10px] text-white-10">
            <motion.button whileTap={{ scale: 0.85 }} onClick={() => navigation("/courses")}>
              <span className="whitespace-nowrap text-ellipsis text-[17px]  sm:text-[19px]">Courses</span>
            </motion.button>
            <motion.button whileTap={{ scale: 0.85 }} onClick={() => navigation("/about")}>
              <span className="whitespace-nowrap text-ellipsis text-[17px] sm:text-[19px]">About</span>
            </motion.button>
            <motion.button onClick={() => navigation("/contact-us")} whileTap={{ scale: 0.85 }}>
              <span className="whitespace-nowrap text-ellipsis text-[17px]  sm:text-[19px]">Contact Us</span>
            </motion.button>
          </div>

          <div className="flex gap-[10px]">
            <button
              onClick={() => navigation("/login")}
              className="text-white-10 hover:bg-linear-grad-yellow-10 whitespace-nowrap text-ellipsis cursor-pointer bg-black-10 h-10 px-3 rounded-sm"
            >
              Login
            </button>
            <button
              onClick={() => navigation("/sign-up")}
              className="hover:bg-linear-grad-yellow-10 text-black whitespace-nowrap text-ellipsis cursor-pointer bg-white-10 px-3 h-10 text-center grid place-items-center rounded-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
      {isSearchOpen && (
        <div className="flex lg:hidden bg-[#ed1c24] px-4 py-2">
          <div className="flex items-center flex-1 rounded-3xl bg-white-10 px-3">
            <SearchIcon />
            <input
              className="pl-2 w-[100%] h-10 min-w-[200px] rounded-3xl  outline-none transition-colors duration-300 ease-in-out"
              placeholder="Search courses, resources."
              type="text"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
