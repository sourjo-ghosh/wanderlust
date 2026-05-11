"use client";

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
    href: "/destinations",
    pathName: "Destinations",
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
          <Link href={"/"}>Profile</Link>
          <Link href={"/"}>Login</Link>
          <Link href={"/"}>Sign Up</Link>
        </div>
      </div>

      {/* Mobile and Tablet View */}

      <div className="flex md:hidden lg:hidden justify-between items-center p-5 bg-white">
          <button onClick={() => setMenuOpen(!MenuOpen)}>
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

      {
        MenuOpen ? <div>
        hello world
        </div> : ""
      }
      {/* <ul className="flex justify-between items-center gap-5 text-black">
        {links.map((link) => (
          <Link key={link.id} href={link.href}>
            {link.pathName}
          </Link>
        ))}
      </ul> */}
      {/* <Link href={"/"}>Login</Link>
          <Link href={"/"}>Sign Up</Link> */}
    </>
  );
};

export default Navbar;
