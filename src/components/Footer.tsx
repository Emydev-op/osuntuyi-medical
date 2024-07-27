import React from "react";
import { facebook, instagram, Logo, Logo2, pinterest, twitter } from "../../public/assets/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[var(--bg-green)] pt-20 text-white w-full">
      <div className="max-w-screen-lg mx-4 md:mx-auto md:flex justify-between mb-9">
        <div className="inline-flex items-start gap-3 font-medium">
          <Image src={Logo2} alt="logo" />
          <h2 className="font-bold text-2xl">Osuntuyi Medical</h2>
        </div>
        <div className="md:w-[70%] w-full max-md:pt-8 capitalize grid grid-cols-2 md:grid-cols-4 max-md:gap-y-8">
          <div className="space-y-5">
            <h5 className="uppercase">services</h5>
            <div className="space-y-2 font-light">
              <p>pathology</p>
              <p>ambulance</p>
              <p>radiology</p>
              <p>pharmacy</p>
            </div>
          </div>
          <div className="space-y-5">
            <h5 className="uppercase">health checkup</h5>
            <div className="space-y-2 font-light">
              <p>woman health</p>
              <p>cancer screening</p>
              <p>cardiac health</p>
              <p>MRI checkup</p>
            </div>
          </div>
          <div className="space-y-5">
            <h5 className="uppercase">departments</h5>
            <div className="space-y-2 font-light">
              <p>general</p>
              <p>Dermatology</p>
              <p>Cardiology</p>
              <p>cancer</p>
            </div>
          </div>
          <div className="space-y-5">
            <h5 className="uppercase">quick link</h5>
            <div className="space-y-2 font-light">
              <p>licence</p>
              <p>changelog</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-4 md:mx-auto flex justify-center md:justify-end items-center gap-4 pb-9">
        <Image src={facebook} alt="logo" />
        <Image src={twitter} alt="logo" />
        <Image src={pinterest} alt="logo" />
        <Image src={instagram} alt="logo" />
      </div>
    </div>
  );
}
