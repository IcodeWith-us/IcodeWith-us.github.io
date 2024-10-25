"use client";
import { useState } from "react";
import Logo from "@/components/icons/Logo";
import Search from "../icons/Search";
import Moon from "../icons/Moon";
import Cart from "../icons/Cart";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { title } from "process";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen,setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="w-screen bg-white dark:bg-black px-4 sm:px-16 justify-between-flex h-16 sm:h-20 drop-shadow-[0_2px_2px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_1px_1px_rgba(50,50,50,0.5)] transition-colors duration-700 ease-in-out fixed z-50">
      <div className="centered-flex mobile:justify-between gap-5">
        <Link href={`/${title}`} className="link-text">
          <Logo className="w-24" />
        </Link>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white dark:bg-black lg:relative lg:flex lg:gap-7 lg:block lg:ml-5 transition-all duration-300`}
          style={{padding: isOpen ? "28px" : "0px"}}
        >
          <li>
            <Link href="#" className="link-text hover:text-newGrey transition-colors duration-100">
              UI Kits
            </Link>
          </li>
          <li>
            <Link href="" className="link-text hover:text-newGrey transition-colors duration-100 ">
              Mockups
            </Link>
          </li>
          <li>
            <Link href={`/${title}`} className="link-text hover:text-newGrey transition-colors duration-100 ">
              Icon Sets
            </Link>
          </li>
          <li>
            <Link href="" className="link-text hover:text-newGrey transition-colors duration-100">
              Vectors
            </Link>
          </li>
        </ul>
        <Search className="hidden lg:block mt-1 cursor-pointer" />
      </div>
      <div className="centered-flex gap-4">
        {/* <Moon /> */}
        <ThemeSwitch />
        <Cart />
        <button className="contact-btn ml-4 hidden lg:block h-12 hover:bg-secondary transition-colors duration-100" >Contact Us</button>
        <button
          onClick={toggleButton}
          className="lg:hidden text-black dark:text-white"
          style={{fontSize : "28px"}}
        >
        ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
