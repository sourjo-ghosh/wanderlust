"use client";

import { Button } from "@heroui/react";
import { Menu, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    id: 1,
    href: "/",
    pathName: "Home",
  },
  {
    id: 2,
    href: "/add-destination",
    pathName: "Add Destination",
  },
  {
    id: 3,
    href: "/my-bookings",
    pathName: "My Bookings",
  },
  {
    id: 4,
    href: "/admin",
    pathName: "Admin",
  },
];
const Navbar = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex lg:flex justify-between items-center p-5 bg-white">
        <ul className="flex justify-between items-center gap-3 text-black">
          {links.map((link) => (
            <Link key={link.id} href={link.href}>
              {link.pathName}
            </Link>
          ))}
        </ul>
        <div>
          <Link href={"/"}>
            <Image
              src="/assets/Wanderlast.png"
              alt="Website Logo"
              width={200}
              height={200}
            ></Image>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-3 text-black">
          <Link href={"/"} className="flex justify-center items-center gap-2">
          <UserRound/>
          Profile
          </Link>
          <Link href={"/"}>Login</Link>
          <Link href={"/"}>Sign Up</Link>
        </div>
      </div>

      {/* Mobile and Tablet View */}

      <div className="flex md:hidden lg:hidden justify-between items-center p-5 bg-white">
        <button onClick={() => setMenuOpen(true)}>
          <Menu className="text-black cursor-pointer" />
        </button>
        <div className="flex flex-2 justify-center items-center">
          <Link href={"/"}>
            <Image
              src="/assets/Wanderlast.png"
              alt="Website Logo"
              width={200}
              height={200}
            ></Image>
          </Link>
        </div>
      </div>

      {MenuOpen && (
        <>
          <>
            {/* Backdrop */}
            <div
              onClick={() => setMenuOpen(false)}
              className={`
      fixed inset-0 bg-black/40 backdrop-blur-sm z-40
      transition-opacity duration-300
      ${MenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
            ></div>

            {/* Drawer */}
            <div
              className={`
      fixed top-0 left-0
      h-screen w-[280px]
      bg-white
      z-50
      shadow-2xl
      rounded-r-3xl
      overflow-hidden

      transition-all duration-500 ease-in-out

      ${MenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
    `}
            >
              {/* Top Section */}
              <div className="bg-white p-6 text-black">
                <Link href={"/"}>
                  <Image
                    src="/assets/Wanderlast.png"
                    alt="Website Logo"
                    width={200}
                    height={200}
                  ></Image>
                </Link>
                <p className="text-sm opacity-80 mt-2">Explore The World</p>
              </div>
              {/* Menu */}
              <div className="p-5 flex flex-col gap-3">
                {links.map((link) => (
                  <Link key={link.id} href={link.href}>
                    <button
                      className="
                      w-full
                      text-black
                      cursor-pointer
        flex items-center gap-3
        p-3 rounded-2xl
        hover:bg-cyan-50
        transition-all duration-300
        hover:translate-x-2
      "
                    >
                      {link.pathName}
                    </button>
                  </Link>
                ))}
              </div>

              {/* Bottom Profile */}
              <div  className="absolute bottom-5 left-5 right-5">
                <div className="my-4 flex justify-center items-center gap-6 text-black">
                  <button className="bg-blue-400 text-white py-2 px-6 rounded-2xl cursor-pointer ">Login</button>
                  <button className="text-blue-400 border border-blue-400 py-2 px-6 cursor-pointer rounded-2xl">Sign Up</button>
                </div>
                <div
                  className="bg-gray-100 rounded-2xl py-6 px-5 text-black"
                >
                  <div className="p-4 bg-gray-300 rounded-2xl flex justify-start gap-3">
                  <UserRound/> 
                  <Link href={"/profile"} className="text-lg">Profile</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
};

export default Navbar;
