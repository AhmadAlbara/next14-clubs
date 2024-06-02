"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SIDEBAR_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SiClubhouse } from "react-icons/si";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="w-full max-w-[264px]" onClick={toggleMenu}>
      <Sheet>
        <SheetTrigger asChild onClick={toggleMenu}>
          <button className="flex flex-col gap-1 p-2">
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-dark-1"
          onClick={toggleMenu}
        >
          <Link href={"/"} className="flex items-center text-white gap-1">
            <SiClubhouse size={32} />
            <p className="text-[26px] font-extrabold  ">Clubs</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild onClick={toggleMenu}>
              <section className="flex h-full flex-col gap-2 pt-16 text-white">
                {SIDEBAR_LINKS.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <SheetClose key={item.path} asChild onClick={toggleMenu}>
                      <Link
                        href={item.path}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center px-4 py-3 rounded-lg w-full max-w-60",
                          { "bg-blue-1": isActive }
                        )}
                      >
                        {item.icon}
                        <p className="font-semibold"> {item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
