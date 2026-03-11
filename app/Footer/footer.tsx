import React from "react";
import Logo from "../App_Chunks/Components/Logo";
import Link from "next/link";
const Footer = () => {
  const menus = [
    {
      heading: "Menu",
      links: [
        { name: "About Us", route: "/About-us" },
        { name: "Careers", route: "/Careers" },
        { name: "Contact Us", route: "/Contact" },
      ],
    },
    {
      heading: "Popular Links",
      links: [
        {
          name: "Building Contracting",
          route: "/Services/Building-Contracting",
        },
        { name: "Space Renovation", route: "/Services/Space-Renovation" },
        { name: "Fit-out & Refurbishments", route: "/Services/Fitout" },
        { name: "Architecture Design", route: "/Services/Architecture" },
        { name: "Carpentry", route: "/Services/Carpentry" },
      ],
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 text-gray-600 py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-[.6fr_.1fr_1.3fr] items-top gap-5 lg:gap-20">
        <div>
          <Logo className="!min-w-44 " />
          <p>
            MZBC Technical Services is a premier UAE contracting and fit-out
            company, redefining excellence in construction.
          </p>
        </div>
        <div></div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-[auto_auto_auto] gap-10 lg:gap-1">
          {menus.map((elem, idx) => (
            <div key={idx} className="">
              <div>
                <h3 className="text-xl font-[600] text-gray-900">
                  {elem.heading}
                </h3>
                <ul className="mt-3">
                  {elem.links.map((link, index) => (
                    <li key={index} className="mt-1">
                      <Link href={link.route}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-xl text-slate-950 font-[600]">Address</h3>
              <ul className="mt-3">
                <li>Phone - +971581115376</li>
                <li>Email - info@MZBC Technical Servicescontracting.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center lg:text-start mt-10 lg:mt-8 flex lg:justify-start justify-center">
        <p>&#169; {year} MZBC Technical Services Copyright Protected</p>
      </div>
    </footer>
  );
};

export default Footer;
