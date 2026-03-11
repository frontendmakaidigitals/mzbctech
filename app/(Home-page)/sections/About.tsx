"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
const About = () => {
  const imgRef = useRef(null);
  const router = useRouter();
  return (
    <div className="w-full my-20">
      <div className=" grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
        {/* Text Section */}
        <div className="w-full container pr-14 order-1">
          <h2 className="text-6xl font-heroFont font-[700]">
            MZBC Technical Services: The{" "}
            <span className="bg-gradient-to-r font-secondaryFont from-[#68e854] via-[#55b447] to-[#34ac22] bg-clip-text text-transparent">
              Zenith
            </span>{" "}
            of Excellence
          </h2>
          <p className="mt-7  text-xl leading-relaxed">
            At MZBC Technical Services, we are more than just a fit-out company,
            we are creators of exceptional spaces. With a passion for design and
            craftsmanship, we specialize in transforming interiors into
            functional, stylish, and inspiring environments. <br />
            <br /> Our expertise spans residential, commercial, and hospitality
            sectors, where we bring innovative solutions tailored to each
            client’s unique vision. Committed to quality and precision, we
            handle every detail from planning to execution, ensuring seamless
            project delivery. At MZBC Technical Services, excellence isn’t just
            a goal - it’s our standard.
          </p>
          <button
            onClick={() => ""}
            className="relative mt-5 h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group"
          >
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#7BD26F] via-[#58B54E] to-[#2F7D34]">
              <div className="absolute inset-0 bg-[#2F7D34] rounded-lg opacity-90" />
            </div>

            {/* Base layers */}
            <div className="absolute inset-[2px] bg-[#2F7D34] rounded-lg opacity-95" />
            <div className="absolute inset-[2px] bg-gradient-to-r from-[#2F7D34] via-[#58B54E] to-[#2F7D34] rounded-lg opacity-90" />

            {/* Glow layer */}
            <div className="absolute inset-[2px] bg-gradient-to-b from-[#7BD26F]/40 via-[#58B54E] to-[#2F7D34]/40 rounded-lg opacity-80" />

            {/* Subtle shine */}
            <div className="absolute inset-[2px] bg-gradient-to-br from-[#A6E59D]/20 via-[#58B54E]/10 to-[#2F7D34]/50 rounded-lg" />

            {/* Inner shadow */}
            <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(88,181,78,0.25)] rounded-lg" />

            {/* Text */}
            <div className="relative flex items-center justify-center gap-2">
              <span className="text-lg font-normal bg-gradient-to-b from-[#ECFDF5] to-[#BBF7D0] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(88,181,78,0.4)] tracking-tight">
                Contact us
              </span>
            </div>

            {/* Hover highlight */}
            <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#58B54E]/20 via-[#7BD26F]/20 to-[#58B54E]/20 group-hover:opacity-100 rounded-lg" />
          </button>
        </div>

        {/* Image with Parallax Effect */}
        <div
          ref={imgRef}
          className="h-[450px] lg:h-[600px] w-full overflow-hidden"
        >
          <motion.img
            className="w-full h-full object-cover"
            src="Media/About us.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
