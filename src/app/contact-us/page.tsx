"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { FormEvent } from "react";
import { MailIcon2, PhoneIcon } from "../../../public/assets/icons";

export default function ContactUs() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <main className="bg-[var(--bg-primary)]">
      <Banner />
      <Navbar />
      <section className="my-16 max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-2/5">
            <p className="text-xs font-semibold text-[var(--bg-green)] mb-4">
              APPOINTMENT
            </p>
            <h2 className="font-semibold text-4xl mb-8">
              Get in touch to book your first appointment
            </h2>
            <p className="font-normal text-base mr-10 mb-10">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia.
            </p>
            <ul className="space-y-5">
              <li className="flex gap-x-3 items-center">
                <Image src={PhoneIcon} alt="" /> (234) 81-8456-7890
              </li>
              <li className="flex gap-x-3 items-center">
                <Image src={MailIcon2} alt="" /> medico@health.io
              </li>
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] px-8 py-7 w-1/2 space-y-4"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border-2 py-3 px-4 border-[var(--input-gray-100)] rounded-[10px] w-full outline-none placeholder-[var(--input-gray-200)] placeholder:font-medium"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="border-2 py-3 px-4 border-[var(--input-gray-100)] rounded-[10px] w-full outline-none placeholder-[var(--input-gray-200)] placeholder:font-medium"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border-2 py-3 px-4 border-[var(--input-gray-100)] rounded-[10px] w-full outline-none placeholder-[var(--input-gray-200)] placeholder:font-medium"
            />
            <select
              name="name"
              id="name"
              className="border-2 py-3 px-4 border-[var(--input-gray-100)] rounded-[10px] w-full outline-none placeholder-[var(--input-gray-200)] placeholder:font-medium"
            >
              <option value="">Select appointment Type</option>
              <option value="">Woman health</option>
              <option value="">cancer Screening</option>
              <option value="">Kids Vaccines</option>
            </select>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="border-2 py-3 px-4 border-[var(--input-gray-100)] rounded-[10px] w-full outline-none placeholder-[var(--input-gray-200)] placeholder:font-medium"
            />
            <button
              type="submit"
              className="bg-[var(--bg-green)] text-white text-lg font-semibold py-3 rounded-[5px] w-full hover:bg-[#1A9FA8]"
            >
              Submit Now
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
