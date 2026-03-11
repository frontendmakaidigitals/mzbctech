"use client";
import React, { useState, useRef, useEffect } from "react";
import Marquee from "@/app/App_Chunks/Components/Marquee";
import PopUpForm from "@/app/App_Chunks/Components/PopUpForm";
import { cn } from "@/app/lib/utils";
import { GridPattern } from "@/app/App_Chunks/Components/GridPattern";

const HeroSection = () => {
  const slider = [
    {
      img: "https://raw.githubusercontent.com/frontendmakaidigitals/MZBC Technical Services/refs/heads/main/public/heroSection/herosection1.jpg",
    },
    {
      img: "https://raw.githubusercontent.com/frontendmakaidigitals/MZBC Technical Services/refs/heads/main/public/heroSection/herosection2.jpg",
    },
    {
      img: "https://raw.githubusercontent.com/frontendmakaidigitals/MZBC Technical Services/refs/heads/main/public/heroSection/herosection3.jpg",
    },
    { img: "heroSection/heroSection4.jpg" },
  ];

  const firstRow = slider.slice(0, slider.length / 2);
  const secondRow = slider.slice(slider.length / 2);

  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(true);

  const heroContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContainer.current) {
        const containerHeight = heroContainer.current.offsetHeight;
        setAnimate(window.scrollY <= containerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroContainer}
      className="relative w-full overflow-hidden bg-[#1E293B] pb-16 lg:pb-0 lg:h-[99vh]"
    >
      <PopUpForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Us"
      />

      {/* grid overlay */}
      <GridPattern
        width={35}
        height={35}
        x={-1}
        y={-1}
        className={cn(
          "text-white/10 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
        {/* TEXT SIDE */}
        <div className="flex justify-center">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-5xl xl:text-6xl font-heroFont font-semibold text-white leading-tight">
              Bringing Your{" "}
              <span className="font-secondaryFont text-[#58B54E]">Dream</span>
              <br />
              <span className="font-secondaryFont text-[#58B54E]">
                Spaces
              </span>{" "}
              to Life
            </h1>

            <p className="text-white/80 mt-4 text-md md:text-lg max-w-xl">
              At MZBC Technical Services, we craft bespoke interiors that blend
              aesthetics with functionality. As a leading fit-out company, we
              transform residential, commercial, and hospitality spaces into
              inspiring environments.
            </p>

            {/* CTA BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
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
                  Get a Quote
                </span>
              </div>

              {/* Hover highlight */}
              <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#58B54E]/20 via-[#7BD26F]/20 to-[#58B54E]/20 group-hover:opacity-100 rounded-lg" />
            </button>
          </div>
        </div>

        {/* IMAGE MARQUEE */}
        <div className="grid grid-cols-2 overflow-hidden h-[450px] md:h-[700px] lg:h-[99vh] bg-black/20 backdrop-blur-sm rounded-lg">
          <Marquee isAnimating={animate} vertical>
            {firstRow.map((img, idx) => (
              <div key={idx} className="h-[200px] lg:h-[350px]">
                <img
                  src={img.img}
                  alt="Interior design project"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Marquee>

          <Marquee reverse vertical isAnimating={animate}>
            {secondRow.map((img, idx) => (
              <div key={idx} className="h-[200px] lg:h-[350px]">
                <img
                  src={img.img}
                  alt="Interior design project"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* bottom shape */}
      <div className="absolute z-20 flex justify-end xl:justify-center items-center bottom-0 left-0 w-full h-[30px]">
        <div className="w-0 h-0 border-l-transparent border-l-[30px] border-b-[30px] border-b-[#e8ece4]"></div>
        <div className="w-[40vw] bg-[#e8ece4] h-full"></div>
        <div className="w-0 h-0 border-r-[30px] hidden xl:block border-r-transparent border-b-[30px] border-b-[#e8ece4]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
