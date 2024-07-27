import React from "react";
import { facebook, instagram, Logo, Logo2, pinterest, twitter } from "../../public/assets/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[var(--bg-green)] pt-20 text-white w-full">
      <div className="max-w-screen-lg mx-auto flex justify-between mb-9">
        <div className="inline-flex items-start gap-3 font-medium">
          <Image src={Logo2} alt="logo" />
          <h2 className="font-bold text-2xl">Osuntuyi Medical</h2>
        </div>
        <div className="w-[70%] capitalize grid grid-cols-2 md:grid-cols-4">
          <div className="space-y-5">
            <h5 className="uppercase">services</h5>
            <div className="space-y-2">
              <p className="">pathology</p>
              <p className="">ambulance</p>
              <p className="">radiology</p>
              <p className="">pharmacy</p>
            </div>
          </div>
          <div className="space-y-5">
            <h5 className="uppercase">health checkup</h5>
            <div className="space-y-2">
              <p className="">woman health</p>
              <p className="">cancer screening</p>
              <p className="">cardiac health</p>
              <p className="">MRI checkup</p>
            </div>
          </div>
          <div className="space-y-5">
            <h5 className="uppercase">departments</h5>
            <div className="space-y-2">
              <p className="">general</p>
              <p className="">Dermatology</p>
              <p className="">Cardiology</p>
              <p className="">cancer</p>
            </div>
          </div>
          <div className="space-y-5">
            <h5 className="uppercase">quick link</h5>
            <div className="space-y-2">
              <p className="">licence</p>
              <p className="">changelog</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex justify-end items-center gap-4 pb-9">
        <Image src={facebook} alt="logo" />
        <Image src={twitter} alt="logo" />
        <Image src={pinterest} alt="logo" />
        <Image src={instagram} alt="logo" />
      </div>
    </div>
  );
}
