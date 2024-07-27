"use client"
import Image from 'next/image';
import React from 'react'
import { Logo } from '../../public/assets/icons';
import Link from 'next/link';

const shouldScroll = "top-[10px]";
const notScroll = "top-[68px]";
export default function Navbar() {
    const [navBackground, setNavBackground] = React.useState(notScroll);
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setNavBackground(shouldScroll); // Change to your desired color
      } else {
        setNavBackground(notScroll);
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
      <div className="flex justify-between mx-7 items-center">
        <div className="text-xl font-semibold inline-flex gap-x-[10px]">
          <Image src={Logo} alt="logo" /> Osuntuyi Medical
        </div>
        <ul className="flex  font-medium">
          <li className="px-3">Home</li>
          <li className="px-3">About</li>
          <Link href="/contact-us" className="px-3">
            Contact Us
          </Link>
        </ul>
        <button className="bg-[var(--bg-green)] text-lg font-bold p-3 text-white rounded-[10px] transition-all ease-linear hover:drop-shadow-sm">
          Appointment
        </button>
      </div>
    </nav>
  );
}
