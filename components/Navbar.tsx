import Link from "next/link";
import { SiClubhouse } from "react-icons/si";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav
      className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10"
      suppressHydrationWarning
    >
      <Link href={"/"} className="flex items-center text-white gap-1">
        <SiClubhouse size={32} />
        <p className="text-[26px] font-extrabold  max-sm:hidden">Clubs</p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
