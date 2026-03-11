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
  const merchandiseService = [
    {
      title: "Concept Development & Design",
      description:
        "We develop creative and brand-focused visual merchandising concepts that enhance the overall shopping experience. Our designs seamlessly blend aesthetics with functionality to create an engaging and immersive environment.",
      solutions: [
        "Store Theme Development – Crafting unique store themes that align with your brand identity and customer expectations.",
        "Visual Storytelling Strategies – Using colors, layouts, and displays to narrate your brand’s story effectively.",
        "3D Renderings & Mock-ups – Providing realistic 3D visuals to help you envision the final look of your retail space.",
        "Brand-Focused Display Designs – Tailored displays to showcase your products while reinforcing your brand’s message.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Window Displays & Store Layouts",
      description:
        "First impressions are crucial in retail. Our expertly designed window displays and store layouts ensure that customers are drawn in while easily navigating the space.",
      solutions: [
        "Eye-Catching Window Displays – Striking storefront displays that capture attention and increase foot traffic.",
        "Strategic Product Zoning – Positioning products strategically to guide customers and enhance sales potential.",
        "Traffic Flow Optimization – Ensuring smooth movement and a comfortable shopping experience.",
        "Thematic & Seasonal Display Setups – Designing displays that reflect trends, seasons, and special promotions.",
      ],
      class: "bg-[#c4e4bf] text-slate-800",
      img: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Custom Fixtures & Fittings",
      description:
        "We design and manufacture bespoke fixtures and fittings that enhance product visibility while complementing the store’s theme.",
      solutions: [
        "Custom Shelving & Racks – Tailor-made shelving solutions that enhance product display and accessibility.",
        "Product Display Podiums – Elegant podiums that highlight premium and featured products.",
        "Modular & Movable Units – Flexible and adaptable fixtures that allow for easy rearrangement and customization.",
        "Luxury Finishes & Materials – High-quality materials and finishes that elevate the overall store aesthetics.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1619439677623-6f881c7be58f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Seasonal & Promotional Displays",
      description:
        "We create engaging and dynamic promotional displays that highlight seasonal trends, festive campaigns, and limited-time offers.",
      solutions: [
        "Festive & Holiday Displays – Stunning displays that enhance the shopping experience during peak seasons.",
        "Limited-Time Promotional Setups – Custom displays designed to draw attention to exclusive sales and new product launches.",
        "Pop-Up Store Designs – Creative and functional designs for temporary retail spaces and brand activations.",
        "Interactive Display Solutions – Engaging setups that encourage customer interaction and product exploration.",
      ],
      class: "bg-[#c4e4bf] text-slate-800",
      img: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Digital Integration & Interactive Displays",
      description:
        "We incorporate digital and interactive elements into store designs to create innovative and engaging shopping experiences.",
      solutions: [
        "LED Displays & Digital Signage – High-definition screens that showcase promotions, videos, and brand content.",
        "Interactive Product Showcases – Touchscreen displays that allow customers to explore product features effortlessly.",
        "Smart Lighting Effects – Intelligent lighting solutions that enhance visual appeal and product visibility.",
        "Augmented Reality (AR) Displays – Cutting-edge AR technology that provides an immersive shopping experience.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1599762427626-e11d2df73ed6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Installation & Execution",
      description:
        "Our team ensures flawless execution of your store’s transformation, delivering quality craftsmanship with attention to detail.",
      solutions: [
        "Full Installation Services – End-to-end installation of displays, fixtures, and digital integrations.",
        "On-Site Project Management – Professional supervision to ensure timely and efficient execution.",
        "Quality Control & Finishing – High standards of craftsmanship with precision in every detail.",
        "Post-Installation Support – Ongoing assistance to maintain the visual integrity of your store.",
      ],
      class: "bg-[#c4e4bf] text-slate-800",
      img: "https://images.unsplash.com/photo-1610128833542-9e1d6c6133cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <div className=" hidden md:block md:w-[350px] lg:w-[400px] xl:w-[500px] aspect-[3/2] absolute right-0 -z-10 bottom-0 bg-slate-100">
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
              Visual Merchandising <span className="font-secondaryFont">&</span>{" "}
              Shop Display
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                At MZBC Technical Services, we specialize in transforming retail
                spaces into visually captivating and strategically designed
                environments. Our visual merchandising and shop display
                solutions ensure that your store not only looks aesthetically
                appealing but also maximizes customer engagement and boosts
                sales. From concept development to execution, we create
                immersive shopping experiences tailored to your brand’s
                identity.
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
      <GridSection data={merchandiseService} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
