"use client";
import { SIDEBAR_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="shadow  sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-2">
        {SIDEBAR_LINKS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              href={item.path}
              key={item.label}
              className={cn(
                "flex gap-4 items-center px-4 py-3 rounded-lg justify-start",
                { "bg-blue-1": isActive }
              )}
            >
              {item.icon}
              <p className="text-base max-lg:hidden">{item.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
