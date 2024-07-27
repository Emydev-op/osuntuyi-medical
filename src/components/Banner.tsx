import Image from "next/image";
import React from "react";
import { LocationIcon, MailIcon, WhatsappIcon } from "../../public/assets/icons";

export default function Banner() {
  return (
    <div className="w-full bg-[var(--bg-green)] text-[var(--bg-primary)] px-4 md:px-0">
      <div className="md:flex justify-between py-3 mx-auto max-w-screen-lg font-medium text-sm md:text-base">
        <div className="flex gap-x-10">
          <div className="flex gap-x-3 items-center">
            <Image
              src={LocationIcon}
              alt="locatoin icon"
              className="max-md:size-3"
            />{" "}
            23b Allen Maryland, Lagos
          </div>
          <a
            href="mailto:medico@health.io"
            className="flex gap-x-3 items-center"
          >
            <Image src={MailIcon} alt="mail icon" className="max-md:size-4" />{" "}
            medico@health.io
          </a>
        </div>
        <div className="flex gap-x-3 items-center max-md:mt-2">
          <Image
            src={WhatsappIcon}
            alt="whatsapp icon"
            className="max-md:size-4"
          />{" "}
          <span className=" border-b-[1.5px]">Connect on Whatsapp</span>
        </div>
      </div>
    </div>
  );
}
