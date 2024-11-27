import Link from "next/link"
import {Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, Link as NextLink, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react"
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Admission",
    "Around the college",
    "E-Report",
    "Contact",
    "About us",
    //"Log Out",
  ];

  return (
    <Nav onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <h1 className="text-2xl font-semibold hidden sm:block">
            Kiira College Butiki
          </h1>
          <h1 className="text-2xl font-semibold block sm:hidden">KCB</h1>
        </NavbarBrand>
      </NavbarContent>
      <div className="ml-auto gap-4 hidden sm:flex h-full items-center">
        <Link
          href=""
          className="bg-white flex flex-row items-center gap-2 rounded-xl font-semibold text py-1 px-2 hover:bg-white/50 text-black group group-hover:bg-black group-hover:text-white"
        >
          <label>Home</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text flex flex-row gap-2 items-center py-1 px-2 hover:bg-white/50 group transition ease-in-out delay-300 duration-300"
        >
          <label>Admission</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text flex flex-row gap-2 items-center py-1 px-2 hover:bg-white/50 group transition ease-in-out delay-300 duration-300"
        >
          <label>Around the college</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text flex flex-row gap-2 items-center py-1 px-2 hover:bg-white/50 group transition ease-in-out delay-300 duration-300"
        >
          <label>E-Report</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text flex flex-row gap-2 items-center py-1 px-2 hover:bg-white/50 transition-colors ease-in-out delay-300 duration-300"
        >
          <label>Contact</label>
        </Link>
        <Link
          href=""
          className="rounded-xl font-semibold text flex flex-row gap-2 items-center py-1 px-2 hover:bg-white/50 group transition ease-in-out delay-300 duration-300"
        >
          <label>About us</label>
        </Link>
      </div>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden ml-auto "
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextLink
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
}
