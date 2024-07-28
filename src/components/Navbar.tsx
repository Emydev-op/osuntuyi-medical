"use client";
import Image from "next/image";
import React from "react";
import { Logo } from "../../public/assets/icons";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi"; import { LiaTimesSolid } from "react-icons/lia";

const shouldScroll = "top-[10px]";
const notScroll = "top-[68px]";
export default function Navbar() {
  const [navBackground, setNavBackground] = React.useState(notScroll);
  const [openMenu, setOpenMenu] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setNavBackground(shouldScroll);
      setOpenMenu(false);
    } else {
      setNavBackground(notScroll);
      setOpenMenu(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`max-w-screen-lg w-full h-[90px] bg-white place-content-center z-10 sticky rounded-[10px] m-auto transition-all duration-500 ease-in-out ${navBackground}`}
    >
      <div className="relative w-full">
        <div className="flex justify-between mx-7 items-center">
          <Link href="/">
            {" "}
            <div className="text-xl font-semibold inline-flex gap-x-[10px]">
              <Image src={Logo} alt="logo" /> Osuntuyi Medical
            </div>
          </Link>
          <ul className="hidden md:flex font-medium">
            <Link href="/">
              <li className="px-3">Home</li>
            </Link>
            <Link href="#">
              <li className="px-3">About</li>
            </Link>
            <Link href="/contact-us" className="px-3">
              Contact Us
            </Link>
          </ul>
          <button className="hidden md:block bg-[var(--bg-green)] text-lg font-bold p-3 text-white rounded-[10px] transition-all ease-linear hover:drop-shadow-sm">
            Appointment
          </button>
          <div
            className="block md:hidden"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            {openMenu ? (
              <LiaTimesSolid className="size-7" />
            ) : (
              <HiMenuAlt3 className="size-7" />
            )}
          </div>
        </div>
        <div
          className={`absolute bg-white shadow w-full p-4 z-[5] transition-all duration-500 ease-in-out ${
            openMenu ? "-bottom-[300px]" : "bottom-[1000px]"
          }`}
        >
          <ul className="font-medium mb-3">
            <Link href="/">
              <li className="px-3 py-4 rounded-[10px] hover:bg-green-50">
                Home
              </li>
            </Link>
            <Link href="#">
              <li className="px-3 py-4 rounded-[10px] hover:bg-green-50">
                About
              </li>
            </Link>
            <Link href="/contact-us">
              <li className="px-3 py-4 rounded-[10px] hover:bg-green-50">
                Contact Us
              </li>
            </Link>
          </ul>
          <button className="bg-[var(--bg-green)] text-lg font-bold p-3 text-white rounded-[10px] transition-all ease-linear hover:drop-shadow-sm">
            Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
