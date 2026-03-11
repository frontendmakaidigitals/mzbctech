"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import GridSection from "@/app/App_Chunks/Components/GridSection";
import Choose from "./Choose";
import Banner from "@/app/App_Chunks/Components/Banner2";
import PopUpForm from "@/app/App_Chunks/Components/PopUpForm";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const interiorDesignServices = [
    {
      title: "Residential Interior Design",
      description:
        "Your home should be a perfect blend of comfort, style, and personal expression. At Zaaviyan, we specialize in creating custom interiors that reflect your lifestyle and enhance your daily living experience.",
      solutions: [
        "Luxury Villas & Apartments – We design high-end residential spaces with exquisite materials, unique design elements, and a refined aesthetic.",
        "Personalized Home Styling – Every home is different, and our approach ensures that your interiors reflect your personal taste, whether modern, classic, contemporary, or minimalist.",
        "Living Room & Lounge Areas – We curate elegant living spaces that encourage relaxation and social interactions, featuring high-quality furniture, decorative lighting, and artistic elements.",
        "Bedroom Design – Tailoring bedroom interiors to be tranquil retreats, with soft textures, comfortable furniture, and lighting that creates the perfect ambiance.",
        "Kitchen & Bathroom Interiors – Functional yet stylish designs that incorporate modern layouts, high-end finishes, and space-saving solutions.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=3192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Commercial Interior Design",
      description:
        "A well-designed commercial space enhances brand identity, improves efficiency, and creates a lasting impression. Zaaviyan specializes in commercial interiors that are both practical and visually appealing.",
      solutions: [
        "Corporate Office Interiors – We create workspaces that boost productivity and reflect corporate identity through ergonomic furniture, optimized layouts, and brand-inspired aesthetics.",
        "Retail & Showroom Design – Designing interactive and visually engaging spaces that attract customers, highlight products, and improve sales.",
        "Restaurant & Hospitality Interiors – We craft warm, inviting, and stylish interiors for restaurants, cafés, and hotels, ensuring an unforgettable customer experience.",
        "Co-Working Spaces & Startups – Developing flexible, modern, and collaborative work environments that inspire creativity and efficiency.",
      ],
      class: "bg-[#c4e4bf] text-slate-800",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Interior Space Planning & Layout Design",
      description:
        "A well-planned space is essential for both functionality and aesthetics. Our space planning services ensure that every square foot is optimized for comfort, efficiency, and purpose.",
      solutions: [
        "Efficient Floor Plans – We create structured layouts that enhance movement and functionality while maintaining visual appeal.",
        "Zoning & Traffic Flow Management – Careful space distribution to ensure easy navigation and smooth interaction within the environment.",
        "Furniture Arrangement & Placement – Strategically positioning furniture to improve comfort and usability without overcrowding the space.",
        "Multifunctional Space Design – Solutions for maximizing compact areas, such as convertible furniture and flexible layouts.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1524190952534-79b1f7d6ad5c?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Concept Development & Visualization",
      description:
        "Before beginning any project, it’s crucial to have a clear vision. We bring ideas to life with detailed concept planning and visual representation, allowing clients to experience the final design before execution.",
      solutions: [
        "Mood Boards & Theme Creation – Crafting a cohesive aesthetic through curated color schemes, textures, and material samples.",
        "3D Renderings & Virtual Walkthroughs – Providing lifelike digital previews of interior spaces, ensuring clarity and confidence before implementation.",
        "Material & Finish Selection – Carefully choosing elements that enhance beauty, durability, and practicality.",
        "Lighting & Color Consultation – Expert guidance on selecting the right tones, lighting styles, and placements for a harmonious environment.",
      ],
      class: "bg-[#c4e4bf] text-slate-800",
      img: "https://images.unsplash.com/photo-1635054961796-be9cd02f8797?q=80&w=3067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Custom Interior Elements",
      description:
        "Every interior should have unique design elements that reflect personality and purpose. Our custom interior solutions allow for complete personalization.",
      solutions: [
        "Bespoke Furniture & Upholstery – Designing and manufacturing one-of-a-kind furniture pieces that complement the space.",
        "Custom Decorative Walls & Paneling – Feature walls, artistic installations, and innovative paneling to create focal points.",
        "Luxury Fixtures & Fittings – Handpicked lighting, hardware, and design accents that elevate the overall aesthetic.",
        "Personalized Home & Office Decor – Selection of exclusive artwork, textiles, and decorative pieces for a refined finishing touch.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lighting & Ambience Design",
      description:
        "Lighting is a fundamental aspect of interior design, setting the mood and enhancing the space’s functionality.",
      solutions: [
        "Ambient & Task Lighting Solutions – Creating the perfect balance between general, accent, and task lighting.",
        "Chandeliers & Designer Fixtures – Statement lighting pieces that add elegance and character.",
        "Smart Lighting Integration – Automated solutions for dynamic lighting control and energy efficiency.",
        "Natural & Artificial Light Optimization – Using windows, mirrors, and artificial lighting to enhance brightness and create a welcoming atmosphere.",
      ],
      class: "bg-[#c4e4bf] text-slate-800",
      img: "https://images.unsplash.com/photo-1527853300662-dfbc10ae8e1e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sustainable & Smart Interiors",
      description:
        "We prioritize eco-conscious and technologically advanced design solutions that promote sustainability and modern living.",
      solutions: [
        "Eco-Friendly Materials & Finishes – Sustainable, non-toxic, and durable materials for environmentally responsible interiors.",
        "Energy-Efficient Design Strategies – Incorporating passive cooling, smart windows, and energy-efficient appliances.",
        "Biophilic Design Elements – Bringing nature indoors with living walls, natural textures, and organic forms.",
        "Smart Home & Office Automation – Integrating technology for enhanced security, climate control, and convenience.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1582345486418-0eeaeecb5dda?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <main className="">
      <PopUpForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Us"
      />
      <div className="relative overflow-hidden">
        <div className=" hidden md:block md:w-[350px] lg:w-[400px] xl:w-[500px] aspect-[3/2] absolute right-0 -z-10 bottom-0 ">
          <motion.img
            animate={{ scale: [1.25, 1], opacity: [0, 1] }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            src={
              "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-full max-w-4xl -z-20 bg-gradient-to-b from-[#0e327f40] from-[30%] to-[#f4f7f0] to-[70%] absolute right-0 top-0 " />
        <div className="grid h-[600px] mt-32 md:mt-0 lg:h-[730px] relative container  place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-full left-0 absolute w-full md:max-w-md lg:max-w-xl xl:max-w-auto container flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-2xl lg:text-5xl py-2 px-3 lg:pl-0 lg:pr-5 bg-[#f4f7f0]  font-heroFont">
              Joinery <span className="font-secondaryFont">and</span> Woodcraft
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                At Zaaviyan, we create timeless, functional, and luxurious
                interiors that reflect individuality and elegance. Our expertise
                in interior design spans residential, commercial, and
                hospitality spaces, ensuring each project is meticulously
                planned and executed to perfection.
              </p>
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

          <div className="w-full h-full flex items-center absolute max-w-xs md:max-w-md lg:max-w-xl xl:max-w-3xl bottom-[211px] md:top-0 right-0 md:right-8 -z-10">
            <motion.img
              src={
                "https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              animate={{ scale: [1.25, 1], opacity: [0, 1] }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </div>
      </div>
      <GridSection data={interiorDesignServices} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
