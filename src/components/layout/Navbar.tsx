import React from "react";
import Logo from "@/components/icons/Logo";
import Search from "../icons/Search";
import Moon from "../icons/Moon";
import Cart from "../icons/Cart";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-screen bg-white dark:bg-black px-16 justify-between-flex h-24 drop-shadow-[0_2px_2px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_1px_1px_rgba(50,50,50,0.5)] transition-colors duration-700 ease-in-out fixed z-50">
      <div className="centered-flex gap-5">
        <Link href="/" className="link-text">
          <Logo className="w-28" />
        </Link>
        <ul className="hidden gap-7 lg:centered-flex">
          <li>
            <Link href="#" className="link-text">
              UI Kits
            </Link>
          </li>
          <li>
            <Link href="#" className="link-text">
              Mockups
            </Link>
          </li>
          <li>
            <Link href="#" className="link-text">
              Icon Sets
            </Link>
          </li>
          <li>
            <Link href="#" className="link-text">
              Vectors
            </Link>
          </li>
        </ul>
        <Search className="hidden lg:block" />
      </div>
      <div className="centered-flex gap-4">
        {/* <Moon /> */}
        <ThemeSwitch />
        <Cart />
        <button className="contact-btn ml-4 hidden lg:block">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
