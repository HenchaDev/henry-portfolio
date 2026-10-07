"use client"

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger
                aria-label="Open navigation menu"
                className="relative flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-accent hover:bg-accent hover:text-primary transition-all duration-300"
            >
                
                <span className="text-xs uppercase tracking-widest">Menu</span>
                <CiMenuFries className="text-2xl" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                <SheetTitle className="sr-only">Navigation</SheetTitle>

                {/* logo */}
                <div className="mt-24 mb-24 text-center text-2xl">
                    <SheetClose asChild>
                        <Link href="/">
                            <h1 className="text-4xl font-semibold">
                                Henry<span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </SheetClose>
                </div>

                {/* links */}
                <nav className="flex flex-col gap-8 items-center justify-center">
                    {links.map((link) => (
                        <SheetClose asChild key={link.path}>
                            <Link
                                href={link.path}
                                className={`text-xl capitalize hover:text-accent transition-all ${
                                    link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                                }`}
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;