"use client";
import Banner from "@/components/Banner";
import Image from "next/image";
import {
  Check,
  EyeIcon,
  HeadIcon,
  HeartIcon,
  Image1,
  Image2,
  Image3,
  WaterDropIcon,
} from "../../public/assets/icons";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const whyus = [
  "Safety First Quality Must",
  "Patient-Centric Approach",
  "Focused Leadership",
  "Cutting-Edge Technology",
  "Transparent Pricing",
  "Coordinated Care",
];

const womenlist = [
  "Complete Blood Count with ESR",
  "Lipid Profile, Live Profile, kidney Profile ",
  "USG Abdomen with Pelvis, Mammography",
];

export default function Home() {
  return (
    <main className="bg-[var(--bg-primary)]">
      <Banner />
      <Navbar />
      <header className="w-full ">
        <div className="mt-4">
          <div className="mx-4 md:mx-auto flex max-md:flex-col-reverse md:justify-between md:gap-x-4 items-center max-w-screen-lg">
            <div className="w-full md:w-[45%] max-md:mt-4">
              <Image src={Image1} alt="image 1" />
            </div>
            <div className="space-y-2 md:space-y-5 md:w-1/2">
              <p className="text-[var(--bg-green)] font-bold md:text-lg">
                Welcome to Osuntuyi Healthcare
              </p>
              <h3 className="text-[40px] md:text-[60px] font-bold">
                Your Journey to Better Health Starts Here
              </h3>
              <button className="bg-[var(--bg-green)] text-lg font-bold p-[10px] md:p-[14px] text-white rounded-[10px] transition-all ease-linear hover:scale-[1.0125]">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className=" mt-32 mb-16 max-w-screen-lg mx-4 md:mx-auto">
        <h3 className="font-semibold text-3xl md:text-4xl mb-6 md:mb-10">
          Dedicated to provide best treatment.
        </h3>
        <p className="font-normal text-lg md:w-4/5">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine.
        </p>
        <div className="flex max-md:flex-col justify-center items-center md:justify-between mt-16 text-white">
          <div className="relative w-fit mb-16">
            <Image
              src="/assets/pedi.png"
              width={300}
              height={200}
              alt="Pediatrician image"
            />
            <div className="bg-[var(--bg-green)] w-fit px-7 py-5 rounded-[10px] absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-2/3">
              <p className="text-base font-medium">For your health</p>
              <p className="text-2xl font-semibold">Pediatrician</p>
            </div>
          </div>
          <div className="relative w-fit mb-16">
            <Image
              src="/assets/card.png"
              width={300}
              height={200}
              alt="Cardiologist image"
            />
            <div className="bg-[var(--bg-green)] w-fit px-7 py-5 rounded-[10px] absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-2/3">
              <p className="text-base font-medium">For your health</p>
              <p className="text-2xl font-semibold">Cardiologist</p>
            </div>
          </div>
          <div className="relative w-fit mb-16">
            <Image
              src="/assets/derm.png"
              width={300}
              height={200}
              alt="Dermatologist image"
            />
            <div className="bg-[var(--bg-green)] w-fit px-6 py-5 rounded-[10px] absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-2/3">
              <p className="text-base font-medium">For your health</p>
              <p className="text-2xl font-semibold">Dermatologist</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 mb-9">
        <div className=" max-w-screen-lg md:flex justify-between items-end mx-4 md:mx-auto">
          <div className=" max-w-lg">
            <p className="text-[var(--bg-green)] font-bold text-sm">
              SERVICES & TREATMENTS
            </p>
            <h3 className="text-[36px] md:text-[40px] font-bold">
              More than 40 specialty and health care{" "}
              <br className="hidden md:block" /> services
            </h3>
          </div>
          <button className="bg-[var(--bg-green)] max-md:mt-3 text-lg font-semibold p-[14px] text-white rounded-[10px] transition-all ease-linear hover:scale-[1.0125]">
            See All Services
          </button>
        </div>
        <div className=" max-w-screen-lg mx-4 md:mx-auto md:px-10 grid grid-cols-1 md:grid-cols-2 mt-16 gap-8">
          <div className="bg-white rounded-[10px] flex items-start p-7 md:p-9 space-x-6">
            <Image src={HeadIcon} alt="head icon" className="max-w-12" />
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-bold text-[24px] md:text-[28px]">
                Mental Health Service
              </h3>
              <p className="font-medium md:w-[90%]">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[10px] flex items-start p-7 md:p-9 space-x-6">
            <Image src={EyeIcon} alt="head icon" className="max-w-12" />
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-bold text-[24px] md:text-[28px]">
                Eye Diseasses Service
              </h3>
              <p className="font-medium md:w-[90%]">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[10px] flex items-start p-7 md:p-9 space-x-6">
            <Image src={WaterDropIcon} alt="head icon" className="max-w-12" />
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-bold text-[24px] md:text-[28px]">
                Vaccination Service
              </h3>
              <p className="font-medium md:w-[90%]">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[10px] flex items-start p-7 md:p-9 space-x-6">
            <Image src={HeartIcon} alt="head icon" className="max-w-12" />
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-bold text-[24px] md:text-[28px]">
                Cardiology Service
              </h3>
              <p className="font-medium md:w-[90%]">
                The service provides immediate medical care to patients with
                acute illnesses or injuries that require immediate attention
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full pt-[72px]">
        <div className="max-w-screen-lg mx-4 md:mx-auto pb-28">
          <div className="flex max-md:flex-col-reverse md:items-center md:justify-between">
            <Image src={Image2} alt="" className="md:w-1/2" />
            <div className="space-y-6 md:space-y-9 md:w-2/5 max-md:mb-8">
              <h2 className="font-bold text-[40px]">Why Choose Us?</h2>
              <div className="space-y-4 md:space-y-6">
                {whyus?.map((item) => (
                  <div
                    key={item}
                    className="font-medium text-xl flex item-center gap-x-4"
                  >
                    <Image src={Check} alt="" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 space-y-6 md:space-y-7">
            <h2 className="font-bold text-[36px] md:text-[40px]">
              Wellness, Compassion, Quality
            </h2>
            <p className="font-medium text-xl md:w-[85%]">
              They live in Bookmarks grove right at the coast of the Semantics,
              a large language ocean. A small river named Duden flows by their
              place and supplies it.
            </p>
            <button className="bg-[var(--bg-green)] text-lg font-bold p-4 text-white rounded-[10px] transition-all ease-linear hover:drop-shadow-sm">
              Take An Appointment
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-screen-lg mx-4 md:mx-auto text-center mt-24 mb-24">
        <h2 className="font-bold text-4xl md:text-[40px] mb-7">
          Health Checkup Plans
        </h2>
        <p className="font-medium md:mx-auto mx-4 text-xl md:w-1/2">
          They live in Bookmarks grove right at the coast of the Semantics, a
          large language ocean named flows.
        </p>

        <div className="bg-white inline-flex rounded-[10px] gap-x-1 p-4 md:p-5 mt-8">
          <div className="bg-[var(--bg-green)] text-white text-lg font-medium rounded-[10px] px-3 md:px-4 py-3 md:py-[14px]">
            Woman Health
          </div>
          <div className="bg-[white] text-black text-lg font-medium rounded-[10px] px-3 md:px-4 py-3 md:py-[14px]">
            Cancer Screening
          </div>
          <div className="bg-[white] text-black text-lg font-medium rounded-[10px] px-3 md:px-4 py-3 md:py-[14px]">
            Kids Vaccines
          </div>
        </div>

        <div className="md:flex items-center justify-between mt-5 text-start">
          <div className="space-y-6 md:space-y-9 md:w-1/2">
            <h2 className="font-semibold text-center text-[32px] md:text-[40px]">
              Women Health Checkup
            </h2>
            <p className="md:-mt-4 max-md:font-medium max-md:text-lg text-center">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring.
            </p>
            <div className="space-y-6">
              {womenlist?.map((item) => (
                <div
                  key={item}
                  className="font-medium text-xl flex item-center gap-x-4"
                >
                  <Image src={Check} alt={item} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Image src={Image3} alt="" className="md:w-2/5" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
